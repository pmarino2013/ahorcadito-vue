<script setup>
// import { ref, onMounted, watch } from "vue";
// import { letter, letras } from "./data/letter";
// import AlertApp from "./components/AlertApp.vue";
// import TecladoApp from "./components/TecladoApp.vue";
// import TimerApp from "./components/TimerApp.vue";
// const texto = ref({ palabra: "", ayuda: "" });

// const palabras = ref("");
// const arrayPalabras = ref([]);
// const caracter = ref("");
// const imagenes = [
//   "/img0.png",
//   "/img1.png",
//   "/img2.png",
//   "/img3.png",
//   "/img4.png",
//   "/img5.png",
//   "/img6.png",
// ];
// const imagenIndex = ref(0);
// const contadorPalabrasEncontradas = ref(0);
// const win = ref(false);
// const loser = ref(false);
// const letters = ref(letras);

// onMounted(() => {
//   inicializar();
// });

// watch(texto, (newTexto) => {
//   palabras.value = newTexto.palabra.split("");
//   palabras.value.map((palabra, index) => {
//     arrayPalabras.value = [
//       ...arrayPalabras.value,
//       { id: index, letra: palabra, display: "hidden" },
//     ];
//   });
// });

//-----watch para perder-------
// watch(imagenIndex, (newImagenIndex) => {
//   if (newImagenIndex === imagenes.length - 1) {
//     loser.value = true;
//   }
// });

// const inicializar = () => {
//   caracter.value = "";
//   imagenIndex.value = 0;
//   arrayPalabras.value = [];
//   win.value = false;
//   loser.value = false;
//   contadorPalabrasEncontradas.value = 0;
//   letters.value.forEach((item) => (item.done = false));
//   palabraRandom();
// };

// const palabraRandom = () => {

//   const index = Math.floor(Math.random() * letter.length);
//   texto.value = {
//     palabra: letter[index].palabra,
//     ayuda: letter[index].ayuda,
//   };
// };

// const mostrar = (letra) => {
//   caracter.value = letra;
//   arrayPalabras.value.map((palabra) => {
//     if (palabra.letra === caracter.value.toUpperCase()) {
//       palabra.display = "block";
//       contadorPalabrasEncontradas.value = arrayPalabras.value.filter(
//         (item) => item.display === "block"
//       ).length;
//     }
//   });

//   if (contadorPalabrasEncontradas.value === palabras.value.length) {
//     win.value = true;
//   }
//   if (!palabras.value.includes(caracter.value.toUpperCase())) {
//     imagenIndex.value++;
//   }
// };

// const disabledLetter = (item) => {
//   mostrar(item.letra);
//   letters.value.forEach((element) => {
//     if (element.letra === item.letra) {
//       element.done = true;
//     }
//   });
// };

// const updateLoser = () => {
//   loser.value = true;
// };
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
