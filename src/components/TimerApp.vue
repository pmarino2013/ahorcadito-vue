<template>
  <div class="bg-gray-800 text-white rounded-lg p-2 shadow-lg text-center">
    <div id="timer" class="text-3xl font-mono">{{ num }}</div>
    <!-- <button @click="stop">Stop</button> -->
  </div>
</template>
<script setup>
const props = defineProps({
  updateLoser: Function,
});
import { ref, onMounted, watch } from "vue";

const seg = ref(30);
const num = ref("30");
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

// if (props.loser || props.win) {
//   stop();
// }

watch(seg, (newSeg) => {
  if (newSeg <= -1) {
    props.updateLoser();
    stop();
  }
});

const stop = () => {
  clearInterval(interval);
  seg.value = 30;
  num.value = "30";
};
</script>
<style scope></style>
