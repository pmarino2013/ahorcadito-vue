<template>
  <div class="bg-gray-800 text-white rounded-lg p-2 shadow-lg text-center">
    <div id="timer" class="text-3xl font-mono">{{ num }}</div>
    <!-- <button @click="stop">Stop</button> -->
  </div>
</template>
<script setup>
const props = defineProps({
  loser: Boolean,
  updateLoser: Function,
});
import { ref, onMounted, watch } from "vue";

const seg = ref(20);
const num = ref("20");
let interval;

onMounted(() => {
  iniciar();
});

const iniciar = () => {
  interval = setInterval(() => {
    seg.value--;
    if (seg.value > 9) {
      num.value = seg.value;
    } else {
      num.value = "0" + seg.value;
    }
  }, 1000);
};

if (props.loser || props.win) {
  stop();
}

watch(seg, (newSeg) => {
  if (newSeg <= -1) {
    props.updateLoser();
    stop();
  }
});

const stop = () => {
  clearInterval(interval);
  seg.value = 20;
  num.value = "20";
};
</script>
<style scope></style>
