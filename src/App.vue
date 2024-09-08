<script setup>
import { ref, onMounted, watch } from "vue";
import { letter, letras } from "./data/letter";
import AlertApp from "./components/AlertApp.vue";
import TecladoApp from "./components/TecladoApp.vue";
const texto = ref("");
const palabras = ref("");
const arrayPalabras = ref([]);
const caracter = ref("");
const imagenes = [
  "src/assets/img0.png",
  "src/assets/img1.png",
  "src/assets/img2.png",
  "src/assets/img3.png",
  "src/assets/img4.png",
  "src/assets/img5.png",
  "src/assets/img6.png",
];
const imagenIndex = ref(0);
const contadorPalabrasEncontradas = ref(0);
const win = ref(false);
const letters = ref(letras);

onMounted(() => {
  inicializar();
});

watch(texto, (newTexto) => {
  palabras.value = newTexto.split("");
  palabras.value.map((palabra, index) => {
    arrayPalabras.value = [
      ...arrayPalabras.value,
      { id: index, letra: palabra, display: "hidden" },
    ];
  });
});

const inicializar = () => {
  caracter.value = "";
  imagenIndex.value = 0;
  arrayPalabras.value = [];
  win.value = false;
  contadorPalabrasEncontradas.value = 0;
  letters.value.forEach((item) => (item.done = false));
  palabraRandom();
};

const palabraRandom = () => {
  texto.value = letter[Math.floor(Math.random() * letter.length)];
};

const mostrar = (letra) => {
  caracter.value = letra;
  arrayPalabras.value.map((palabra) => {
    if (palabra.letra === caracter.value.toUpperCase()) {
      palabra.display = "block";
      contadorPalabrasEncontradas.value = arrayPalabras.value.filter(
        (item) => item.display === "block"
      ).length;
    }
  });

  if (contadorPalabrasEncontradas.value === palabras.value.length) {
    win.value = true;
  }
  if (!palabras.value.includes(caracter.value.toUpperCase())) {
    imagenIndex.value++;
  }
};

const disabledLetter = (item) => {
  mostrar(item.letra);
  letters.value.forEach((element) => {
    if (element.letra === item.letra) {
      element.done = true;
    }
  });
};
</script>

<template>
  <div class="relative">
    <div class="bg-red-300 p-5 mb-3 flex justify-center items-center gap-2">
      <img src="/public/letras.png" alt="logo" />
      <h1 class="text-center text-3xl text-slate-800 font-bold">Ahorcadito</h1>
    </div>
    <div class="flex justify-center">
      <div class="m-3 container-img">
        <img :src="imagenes[imagenIndex]" alt="imagen ahorcado" />
      </div>
    </div>
    <div class="flex justify-center flex-wrap gap-y-1">
      <div
        class="border-dashed border-2 border-sky-500 p-2 me-2 box"
        v-for="palabra in arrayPalabras"
        :key="palabra.id"
      >
        <span :class="palabra.display">{{ palabra.letra }}</span>
      </div>
    </div>

    <div class="mt-4">
      <TecladoApp :disabledLetter="disabledLetter" :letters="letters" />
    </div>
    <div
      v-if="imagenIndex === imagenes.length - 1"
      :class="imagenIndex === imagenes.length - 1 && 'overlay'"
    >
      <div class="flex justify-center items-center">
        <AlertApp
          :inicializar="inicializar"
          :texto="texto"
          titulo="PERDISTE!!"
          estilo="red"
        />
      </div>
    </div>
    <div
      v-else-if="win"
      :class="imagenIndex === imagenes.length - 1 && 'overlay'"
    >
      <div class="flex justify-center items-center">
        <AlertApp
          :inicializar="inicializar"
          :texto="texto"
          titulo="GANASTE!!"
          estilo=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
}
.container-img {
  width: 200px;
  height: 200px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
button:disabled {
  background-color: #ccc; /* Color de fondo gris */
  color: #666; /* Color del texto más oscuro */
  cursor: not-allowed; /* Cursor de "no permitido" */
  border: 1px solid #999; /* Borde gris oscuro */
  opacity: 0.7; /* Opacidad para hacer que se vea más apagado */
  box-shadow: none; /* Sin sombra */
}
.overlay {
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
