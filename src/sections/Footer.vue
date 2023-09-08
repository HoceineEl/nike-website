<script setup>
import { socialMedia, footerLinks } from "../constants";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
</script>
<template>
  <footer class="max-container">
    <div class="flex justify-between flex-wrap max-lg:flex-col gap-20">
      <div class="flex flex-col gap-7">
        <a href="/"><img :src="footerLogo" width="150" alt="footer logo" /></a>
        <p class="text-white-400 font-montserrat sm:max-w-sm text-base">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect
          Size In Store. Get Rewards
        </p>
        <div class="flex gap-4">
          <img
            v-for="social in socialMedia"
            :src="social.src"
            :alt="social.alt"
            class="bg-white rounded-full p-3"
          />
        </div>
      </div>
      <div
        class="flex flex-wrap flex-1 justify-between gap-10 max-md:flex-col max-md:gap-20"
      >
        <div v-for="item in footerLinks" :key="item.title">
          <h3 class="text-2xl text-white font-bold font-montserrat mb-6">
            {{ item.title }}
          </h3>
          <ul>
            <li
              v-for="link in item.links"
              :key="link.name"
              class="text-white-400 my-3 font-montserrat text-base hover:text-slate-gray"
            >
              <a :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-16">
      <div
        class="text-md font-montserrat flex gap-2 text-white-400 flex-1 cursor-pointer"
      >
        <img :src="copyrightSign" alt="copyrights" />
        <p>Copyright. All rights reserved.</p>
      </div>
      <p class="text-md font-montserrat text-white-400 cursor-pointer">
        Terms & Conditions
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
