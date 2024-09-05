<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
      <h2 class="text-2xl font-bold text-red-600 mb-4">PERDISTE!!</h2>
      <p>La palabra era {{ texto }}</p>
      <p class="text-gray-700">¡Mejor suerte la próxima vez!</p>
      <button
        @click="inicializar"
        class="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
      >
        OK
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  inicializar: Function,
  texto: String,
});
</script>
<style></style>
