<script setup>
const props = defineProps({
  mostrar: Function,
});
import { letras } from "../data/letter";
</script>
<template>
  <div class="flex items-center justify-center p-2">
    <div class="p-4 bg-white rounded-lg shadow-md">
      <div class="grid grid-cols-9 gap-2 justify-center">
        <button
          @click="mostrar(letra)"
          v-for="letra in letras"
          class="p-2 bg-gray-200 rounded active:bg-red-400"
        >
          {{ letra }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scope></style>
