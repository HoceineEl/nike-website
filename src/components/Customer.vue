<script setup>
import { defineProps } from "vue";
import { star } from "../assets/icons";
let { customer } = defineProps(["customer"]);
</script>
<template>
  <div class="flex flex-col items-center gap-5">
    <img class="rounded-full w-20 h-20" :src="customer.profileImg" :alt="customer.name" />
    <p class="description text-center max-w-sm">{{ customer.comment }}</p>
    <div class="flex gap-2">
      <img :src="star" alt="star" />
      <p class="font-montserrat text-lg text-slate-gray">({{ customer.rating }})</p>
    </div>
    <h3 class="text-3xl leading-normal font-bold font-palanquin">{{ customer.name }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
