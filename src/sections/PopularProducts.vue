<script setup>
import { products } from "../constants";
import ProductCard from "../components/PopularProductsCard.vue";
</script>

<template>
  <section class="flex flex-col max-container">
    <div class="flex flex-col gap-5 justify-start">
      <h2 class="text-4xl font-bold font-montserrat">
        Our <span class="text-coral-red">Popular</span> Products
      </h2>
      <p class="text-slate-gray text-lg max-w-lg">
        Experience top-notch quality and style with our sought-after selections. Discover
        a world of comfort, design, and value
      </p>
    </div>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 200,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
      }"
      class="flex flex-wrap gap-10 mt-16 justify-center"
    >
      <ProductCard
        v-for="product in products"
        :key="product.label"
        :product="product"
        :width="'280'"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
