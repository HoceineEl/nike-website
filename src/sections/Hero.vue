<script setup>
import Button from "../components/Button.vue";
import arrowRight from "../assets/icons/arrow-right.svg";
import { statistics, shoesCards } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
import { Keyboard } from "swiper/modules";
import Card from "../components/Card.vue";
const bigImageUrl = ref(shoesCards[0].imgUrl);

const changeHeroImg = (imgUrl) => {
  bigImageUrl.value = imgUrl;
};
</script>

<template>
  <section class="w-full min-h-screen flex flex-col xl:flex-row max-container">
    <div
      class="relative xl:w-2/5 flex flex-col pt-28 flex-start justify-center items-start gap-8 lg:mb-28 padding-l"
    >
      <p class="text-xl font-montserrat text-coral-red">Our Summer collections</p>
      <h1
        class="text-8xl font-palanquin font-bold max-sm:text-4xl xl:whitespace-nowrap z-10"
      >
        <span class="">The New Arrival</span><br />
        <span class="text-coral-red mt-3">Nike</span> Shoes
      </h1>
      <p class="text-lg text-slate-gray font-montserrat leading-8">
        Discover stylish Nike arrivals, quality <br />
        comfort, and innovation for your active life.
      </p>
      <Button :iconUrl="arrowRight">Shop now</Button>
      <div class="flex justify-start flex-wrap items-start md:gap-16 gap-6 w-full mt-10">
        <div v-for="stat in statistics" :key="stat.label">
          <span class="md:text-4xl font-bold font-palanquin text-3xl">{{
            stat.value
          }}</span>
          <p class="text-lg font-palanquin text-slate-gray">{{ stat.label }}</p>
        </div>
      </div>
    </div>
    <div
      class="flex relative justify-center items-center flex-1 flex-col bg-hero min-h-screen bg-cover bg-primary bg-center mt-10 xl:mt-0 lg:overflow-x-hidden lg:overflow-y-hidden p-8 sm:p-0"
    >
      <!-- Use Vue's built-in transition for smooth image transitions -->
      <transition name="fade" mode="out-in">
        <img
          class="z-40 object-contain rotate-12 transition-all duration-1000"
          :key="bigImageUrl"
          :src="bigImageUrl"
          alt="Shoes collection"
          width="600"
        />
      </transition>
      <div class="w-full absolute bottom-3">
        <Swiper
          :slides-per-view="2"
          :space-between="10"
          :breakpoints="{
            '560': {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }"
          :loop="true"
          :keyboard="true"
          :modules="[Keyboard]"
        >
          ><SwiperSlide v-for="shoe in shoesCards" :key="shoe.imgUrl">
            <Card
              :key="shoe.imgUrl"
              :imgUrl="shoe.imgUrl"
              :width="'140'"
              :isActive="bigImageUrl == shoe.imgUrl"
              @change-hero-img="changeHeroImg"
            /> </SwiperSlide
        ></Swiper>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
  rotate: 20deg;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(800px);
}
.swiper {
  width: 90%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
