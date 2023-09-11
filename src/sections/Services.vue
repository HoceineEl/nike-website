<template>
  <div
    class="max-container"
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
    <div class="flex flex-wrap justify-center gap-5">
      <Card v-for="offer in offers" :key="offer.label" :offer="offer" />
    </div>
  </div>
</template>

<script setup>
import Card from "../components/SpecialOfferCard.vue";
import { offers } from "../constants";
</script>

<style lang="scss" scoped></style>
