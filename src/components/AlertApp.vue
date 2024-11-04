<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
      <h2
        class="text-2xl font-bold mb-4"
        :class="estilo === 'red' ? 'text-red-600' : 'text-blue-600'"
      >
        {{ titulo }}
      </h2>
      <p>La palabra era {{ texto.palabra }}</p>
      <p class="text-gray-700 mb-6">
        {{
          estilo === "red"
            ? "¡Mejor suerte la próxima vez!"
            : "¡Excelente partida!"
        }}
      </p>
      <RouterLink
        v-if="estilo === 'red'"
        to="/"
        class="px-4 py-2 text-white rounded-lg hover:bg-slate-700 focus:outline-none bg-red-600"
      >
        Reiniciar
      </RouterLink>
      <button
        v-else
        @click="inicializar"
        class="px-4 py-2 text-white rounded-lg hover:bg-slate-700 focus:outline-none bg-blue-600"
      >
        Seguir
      </button>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  inicializar: Function,
  texto: Object,
  titulo: String,
  estilo: String,
});
</script>
<style></style>
