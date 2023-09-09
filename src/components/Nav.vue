<script setup>
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";
import { ref } from "vue";

const secondNavOpen = ref(false);

const navToggler = () => {
  secondNavOpen.value = !secondNavOpen.value;
};

window.addEventListener("resize", () => {
  secondNavOpen.value = window.innerWidth <= 1024 ? false : true;
});
</script>

<template>
  <header class="py-8 absolute padding-x z-50 w-full">
    <nav class="flex justify-between">
      <div class="flex justify-between lg:items-center flex-col w-full lg:flex-row">
        <a href="/" class="left-5">
          <img :src="headerLogo" alt="Logo" width="150" height="29" />
        </a>
        <ul
          class="max-lg:py-5 flex-1 justify-center items-center gap-16 max-lg:gap-3 max-lg:flex-col duration-500 transition max-lg:items-start max-lg:bg-white flex"
          :class="{ hidden: !secondNavOpen }"
        >
          <li
            class="text-slate-600 text-lg leading-normal font-montserrat"
            v-for="navLink in navLinks"
            :key="navLink.label"
          >
            <a :href="navLink.href" v-smooth-scroll>{{ navLink.label }}</a>
          </li>
        </ul>
      </div>
      <div
        :src="hamburger"
        alt="hamburger"
        width="25"
        height="25"
        class="hidden max-lg:flex flex-col cursor-pointer gap-1 bg-white"
        @click="navToggler"
      >
        <span
          class="w-6 h-[2px] bg-slate-gray transition-transform duration-500"
          :class="{ 'rotate-45': secondNavOpen, 'translate-y-[5px]': secondNavOpen }"
        ></span>
        <span
          class="w-6 h-[2px] bg-slate-gray transition-transform duration-500"
          :class="{ '-rotate-45': secondNavOpen, '-translate-y-[2px]': secondNavOpen }"
        ></span>
        <span
          class="w-6 h-[2px] bg-slate-gray transition duration-500"
          :class="{ 'opacity-0': secondNavOpen }"
        ></span>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped>
.translated {
  transform: translateY(0);
  display: flex;
  opacity: 1;
}
</style>
