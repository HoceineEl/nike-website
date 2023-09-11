<script setup>
import { offer } from "../assets/images";
import Button from "../components/Button.vue";
import { arrowRight } from "../assets/icons";
import { shoesCards } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-cards";
import { Keyboard, Pagination, EffectCards } from "swiper/modules";
</script>
<template>
  <div
    class="max-container flex flex-col gap-32"
    v-motion
    :initial="{
      opacity: 0,
      y: 200,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
  >
    <div class="flex max-xl:flex-col-reverse lg:gap-10 items-center">
      <div class="flex-1 mt-10 lg:mt-0">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="[Keyboard, Pagination, EffectCards]"
          class="offer"
          :loop="true"
          :keyboard="{
            enabled: true,
          }"
          :pagination="{
            clickable: true,
          }"
        >
          <swiper-slide v-for="shoe in shoesCards" :key="shoe">
            <div
              class="w-full h-full bg-gradient-to-r from-[#F5F6FF] to-coral-red flex rounded-xl justify-center items-center"
            >
              <img :src="shoe.imgUrl" alt="Shoe image" class="px-3" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="space-y-12 max-w-lg">
        <h2 class="heading"><span class="text-coral-red">Special </span>Offer</h2>
        <p class="description">
          Embark on a shopping journey that redefines your experience with unbeatable
          deals. From premier selections to incredible savings, we offer unparalleled
          value that sets us apart.
        </p>
        <p class="description">
          Navigate a realm of possibilities designed to fulfill your unique desires,
          surpassing the loftiest expectations. Your journey with us is nothing short of
          exceptional.
        </p>
        <div class="flex gap-4">
          <Button>View details</Button>
          <button
            class="px-7 py-4 rounded-full flex items-center justify-center gap-2 leading-none border-slate-500 text-gray-500 border font-montserrat font-medium hover:bg-slate-500 hover:text-white transition-all duration-200"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 300px;
  height: 400px;
}

.swiper-slide {
  max-width: 500px;
}
@media (width<=670px) {
  .swiper {
    width: 200px;
    height: 300px;
  }
}
</style>
