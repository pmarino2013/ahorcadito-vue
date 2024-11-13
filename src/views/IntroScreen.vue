<script setup>
import { RouterLink } from "vue-router";
import CabeceraApp from "../components/CabeceraApp.vue";
</script>
<template>
  <CabeceraApp class="posicion" />
  <div class="container">
    <img src="../assets/portada.png" alt="portada" />
    <div class="overlay">
      <RouterLink
        to="/play"
        class="transition duration-150 ease-in-out text-white rounded-lg hover:bg-slate-700 focus:outline-none bg-red-600 btn"
      >
        Jugar!
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  z-index: 2;
  padding: 10px;
}
.posicion {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.btn {
  font-size: 50px;
  border: 10px solid;
  padding: 5px 25px;
}
</style>
