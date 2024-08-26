<script setup>
import { ref, computed } from "vue";
const texto = "PALOMA";
const palabras = ref(texto.split(""));
const arrayPalabras = ref([]);
const caracter = ref("A");

palabras.value.map((palabra, index) => {
  arrayPalabras.value = [
    ...arrayPalabras.value,
    { id: index, letra: palabra, display: "hidden" },
  ];
});

const mostrar = () => {
  caracter.value = prompt("Ingresa la letra");

  arrayPalabras.value.map((palabra) => {
    if (palabra.letra === caracter.value) {
      // newPalabras.value = [...newPalabras.value, palabra.id];
      palabra.display = "block";
    }
  });
};

// const mostrar = computed(() => {
//   palabras.value.forEach((item, index) => {
//     for (let i = 0; i < newPalabras.value.length; i++) {
//       if (item === newPalabras.value[i].letra) {
//         console.log(item);
//         return true;
//       }
//     }
//   });
// });

// palabras.current = texto.split("");
</script>

<template>
  <div>
    <h1 class="my-5">Ahorcadito</h1>
    <div class="flex">
      <div
        class="border-dashed border-2 border-sky-500 p-2 me-2 box"
        v-for="palabra in arrayPalabras"
        :key="palabra.id"
      >
        <span :class="palabra.display">{{ palabra.letra }}</span>
      </div>
    </div>
    <button
      @click="mostrar"
      class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Probar
    </button>
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
</style>
