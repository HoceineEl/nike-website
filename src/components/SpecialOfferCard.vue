<script setup>
import { defineProps } from "vue";
const { offer } = defineProps(["offer"]);
</script>
<template>
  <div
    class="shadow-lg shadow-slate-300 rounded-2xl py-16 px-10 space-y-8 w-full flex-1 sm:w-[350px] sm:min-w-[350px]"
  >
    <img
      :src="offer.iconUrl"
      alt="offer icon  "
      class="p-2 flex-grow-0 bg-coral-red rounded-full"
    />
    <h3 class="text-3xl leading-normal font-bold font-palanquin">{{ offer.label }}</h3>
    <p class="text-xl font-palanquin text-slate-gray max-w-lg">{{ offer.desc }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
