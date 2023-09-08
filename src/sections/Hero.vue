<script setup>
import Button from "../components/Button.vue";
import arrowRight from "../assets/icons/arrow-right.svg";
import { statistics } from "../constants/index";
import BigShoeImage from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
// import "animate.css";
import Card from "../components/Card.vue";
import { ref } from "vue";
const bigImageUrl = ref(BigShoeImage);

const changeHeroImg = (imgUrl) => {
  bigImageUrl.value = imgUrl;
};
</script>

<template>
  <section class="w-full min-h-screen flex flex-col xl:flex-row max-container">
    <div
      class="relative xl:w-2/5 flex flex-col pt-28 flex-start justify-center items-start gap-8 lg:mb-28"
    >
      <p class="text-xl font-montserrat text-coral-red">Our Summer collections</p>
      <h1
        class="text-8xl font-palanquin font-bold max-sm:text-6xl xl:whitespace-nowrap z-10"
      >
        <span class="">The New Arrival</span><br />
        <span class="text-coral-red mt-3">Nike</span> Shoes
      </h1>
      <p class="text-lg text-slate-gray font-montserrat leading-8">
        Discover stylish Nike arrivals, quality <br />
        comfort, and innovation for your active life.
      </p>
      <Button :iconUrl="arrowRight">Shop now</Button>
      <div class="flex justify-start items-start gap-16 w-full mt-10">
        <div v-for="stat in statistics" :key="stat.label">
          <span class="heading">{{ stat.value }}</span>
          <p class="text-lg font-palanquin text-slate-gray">{{ stat.label }}</p>
        </div>
      </div>
    </div>
    <div
      class="flex relative justify-center items-center flex-1 flex-col bg-hero min-h-screen bg-cover bg-primary bg-center"
    >
      <!-- Use Vue's built-in transition for smooth image transitions -->
      <transition name="slide-fade" mode="out-in">
        <img
          class="z-last object-contain rotate-12 transition-all duration-1000"
          :key="bigImageUrl"
          :src="bigImageUrl"
          alt="Shoes collection"
          width="600"
        />
      </transition>
      <div class="flex absolute -bottom-16 gap-10">
        <Card
          :imgUrl="BigShoeImage"
          :width="'140'"
          :isActive="bigImageUrl == BigShoeImage"
          @change-hero-img="changeHeroImg"
        />
        <Card
          :imgUrl="bigShoe2"
          :width="'140'"
          :isActive="bigImageUrl == bigShoe2"
          @change-hero-img="changeHeroImg"
        />
        <Card
          :imgUrl="bigShoe3"
          :width="'140'"
          :isActive="bigImageUrl == bigShoe3"
          @change-hero-img="changeHeroImg"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  rotate: 12deg;
}

.slide-fade-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
