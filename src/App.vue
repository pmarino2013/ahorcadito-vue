<script setup>
import { ref, onMounted } from "vue";
import AlertApp from "./components/AlertApp.vue";
import TecladoApp from "./components/TecladoApp.vue";
const texto = "PALOMA";
const palabras = ref(texto.split(""));
const arrayPalabras = ref([]);
const caracter = ref("");
const imagenes = ref([
  "src/assets/img0.png",
  "src/assets/img1.png",
  "src/assets/img2.png",
  "src/assets/img3.png",
  "src/assets/img4.png",
  "src/assets/img5.png",
  "src/assets/img6.png",
]);
const imagenIndex = ref(0);
const contadorPalabrasEncontradas = ref(0);
const win = ref(false);

onMounted(() => {
  inicializar();
});

const inicializar = () => {
  caracter.value = "";
  imagenIndex.value = 0;
  arrayPalabras.value = [];
  win.value = false;
  contadorPalabrasEncontradas.value = 0;

  palabras.value.map((palabra, index) => {
    arrayPalabras.value = [
      ...arrayPalabras.value,
      { id: index, letra: palabra, display: "hidden" },
    ];
  });
};

const mostrar = (letra) => {
  caracter.value = letra;

  arrayPalabras.value.map((palabra) => {
    if (palabra.letra === caracter.value.toUpperCase()) {
      palabra.display = "block";
      contadorPalabrasEncontradas.value++;
    }
  });

  if (contadorPalabrasEncontradas.value === palabras.value.length) {
    win.value = true;
  }
  if (!palabras.value.includes(caracter.value.toUpperCase())) {
    imagenIndex.value++;
  }
};
</script>

<template>
  <div class="relative">
    <h1 class="my-5 text-center text-3xl">Ahorcadito</h1>
    <div class="flex justify-center">
      <div class="m-3 container-img">
        <img :src="imagenes[imagenIndex]" alt="imagen ahorcado" />
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="border-dashed border-2 border-sky-500 p-2 me-2 box"
        v-for="palabra in arrayPalabras"
        :key="palabra.id"
      >
        <span :class="palabra.display">{{ palabra.letra }}</span>
      </div>
    </div>

    <div class="mt-4">
      <TecladoApp :mostrar="mostrar" />
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
          texto=""
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
