<script setup>
import Button from "../components/Button.vue";
import { arrowRight } from "../assets/icons";
import Image from "../assets/images/shoe8.svg";

</script>
<template>
  <section
    v-motion
    :initial="{
      opacity: 0,
      y: 200,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
    }"
    class="flex flex-wrap justify-between max-[1140px]:justify-center max-lg:gap-16 items-center max-container"
  >
    <div class="space-y-12 max-w-lg">
      <h2 class="heading">
        We Provide You <span class="text-coral-red">Super Quality </span>Shoes
      </h2>
      <p class="description">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed
        to elevate your experience, providing you with unmatched quality, innovation, and
        a touch of elegance.
      </p>
      <p class="description">
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <Button :icon-url="arrowRight">Shop now</Button>
    </div>
    <div class=" ">
      <img
        class="z-10 object-contain"
        :src="Image"
        alt="Shoes collection"
        :width="'500'"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
