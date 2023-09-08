<script setup>
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";
</script>
<template>
  <header class="padding-x py-8 absolute z-10 w-full">
    <nav class="flex justify-between items-center max-contaniner">
      <a href="/"> <img :src="headerLogo" alt="Logo" width="150" height="29" /></a>
      <ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        <li
          class="text-slate-600 text-lg leading-normal font-montserrat"
          v-for="navLink in navLinks"
          :key="navLink.label"
        >
          <a :href="navLink.href" v-smooth-scroll>{{ navLink.label }}</a>
        </li>
      </ul>
      <img
        :src="hamburger"
        alt="hamburger"
        width="25"
        height="25"
        class="hidden max-[1024px]:block"
      />
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
