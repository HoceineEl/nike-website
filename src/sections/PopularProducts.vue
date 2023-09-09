<script setup>
import { products } from "../constants";
import ProductCard from "../components/PopularProductsCard.vue";
import Swiper from "swiper";
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
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
      class="flex flex-wrap mt-16 justify-center gap-10"
    >
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="product in products" :key="product.label">
            <ProductCard class="product" :product="product" :width="'280'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper {
  width: 80%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 250px;
}

.swiper-slide .product {
  display: block;
  width: 100%;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0002, #0004);
}
</style>
