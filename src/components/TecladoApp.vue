<script setup>
const props = defineProps({
  mostrar: Function,
});
const letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
</script>
<template>
  <div class="flex items-center justify-center p-2 bg-gray-100">
    <div class="p-4 bg-white rounded-lg shadow-md">
      <div class="grid grid-cols-9 gap-2 justify-center">
        <button
          @click="mostrar(letra)"
          v-for="letra in letras"
          class="p-2 bg-gray-200 rounded"
        >
          {{ letra }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scope></style>
