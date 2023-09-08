<script setup>
import { customers } from "../constants";
import Customer from "../components/Customer.vue";
</script>
<template>
  <div class="max-container">
    <h2 class="heading text-center">
      What Our <span class="text-coral-red">Customers</span> Say?
    </h2>
    <p class="description text-center mx-auto">
      Hear genuine stories from our satisfied customers about their exceptional
      experiences with us.
    </p>
    <div
      class="flex flex-wrap justify-evenly gap-10 flex-1 mt-24"
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
      <Customer v-for="customer in customers" :key="customer.name" :customer="customer" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
