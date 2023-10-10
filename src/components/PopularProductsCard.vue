<script setup>
import { defineProps } from "vue";

const { product, width } = defineProps(["product", "width"]);
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      class="bg-card min-w-lg h-40 px-5 py-10 bg-cover rounded-xl z-10 flex justify-center group items-center"
    >
      <img
        class="z-50 object-contain group-hover:rotate-12 transition-all duration-1000"
        :src="product.imgUrl"
        alt="Shoes collection"
        :width="width"
      />
    </div>
    <div class="flex gap-2">
      <img src="../assets/icons/star.svg" alt="Star" />
      <p class="font-montserrat text-lg text-slate-gray">({{ product.rating }})</p>
    </div>
    <p class="text-xl font-montserrat font-semibold">{{ product.label }}</p>
    <p class="text-coral-red text-md font-bold">${{ product.price }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
