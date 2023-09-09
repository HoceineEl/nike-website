<template>
  <div
    class="fixed bottom-7 right-7 z-[545454] border-2 border-coral-red bg-coral-red shadow-lg shadow-coral-red rounded-full cursor-pointer"
    @click="scrollToBottom"
    v-smooth-scroll
  >
    <img
      :src="arrowRight"
      :class="classRotate"
      class="transition duration-500"
      width="30"
      alt=""
    />
  </div>
</template>

<script setup>
import { arrowRight } from "../assets/icons";
import { onMounted, ref, watch } from "vue";
const to = ref(false);
const classRotate = ref("rotate-90");
const scrollToBottom = () => {
  window.scrollTo({
    top: to.value ? 0 : document.body.scrollHeight,
    behavior: "smooth",
  });
  to.value = !to.value;
};

watch(to, () => {
  classRotate.value = to.value == true ? "reverse-rotate" : "rotate-90";
});

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    to.value = false;
  } else {
    to.value = true;
  }
});
</script>

<style lang="scss" scoped></style>
