<script setup>
const props = defineProps({
  disabledLetter: Function,
  letters: Array,
});
</script>
<template>
  <!-- <div class="flex items-center justify-center p-2"> -->
  <div class="p-4 bg-white rounded-lg shadow-md">
    <div class="grid grid-cols-9 gap-2 justify-center">
      <button
        @click="disabledLetter(item)"
        v-for="item in letters"
        class="p-2 bg-gray-200 rounded"
        :disabled="item.done"
        :class="
          item.done &&
          'bg-red-300 text-gray-500 cursor-not-allowed rounded-lg  font-semibold'
        "
      >
        {{ item.letra }}
      </button>
    </div>
  </div>

  <!-- </div> -->
</template>
<style scope></style>
