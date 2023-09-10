<script setup>
import { defineProps, defineEmits } from "vue";

const { imgUrl, width, isActive } = defineProps(["imgUrl", "width", "isActive"]);
const emit = defineEmits(["change-hero-img"]);

const onClick = () => {
  emit("change-hero-img", imgUrl);
};
</script>

<template>
  <div
    class="bg-card px-5 py-10 bg-cover rounded-xl z-10 border-2 w-32 h-32"
    @click="onClick"
    :class="{ 'border-coral-red': isActive }"
  >
    <img
      class="z-10 object-contain"
      :src="imgUrl"
      alt="Shoes collection"
      :width="width"
    />
  </div>
</template>

<style lang="scss" scoped></style>
