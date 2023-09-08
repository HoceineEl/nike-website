<template>
  <button
    class="px-7 text-lg py-4 rounded-full bg-coral-red text-white flex items-center justify-center gap-2 leading-none border font-montserrat font-medium"
  >
    <slot name="default">Click me!</slot>
    <img v-if="iconUrl != ''" class="ml-2 w-5 h-5 rounded-full" :src="iconUrl" alt="" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  iconUrl: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
