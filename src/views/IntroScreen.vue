<template>
  <CabeceraApp />
  <div class="container">
    <h1>Bienvenido</h1>
    <RouterLink
      to="/play"
      class="px-4 py-2 transition duration-150 ease-in-out text-white rounded-lg hover:bg-slate-700 focus:outline-none bg-red-600"
    >
      Jugar!
    </RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import CabeceraApp from "../components/CabeceraApp.vue";
</script>
<style scoped>
.container {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
