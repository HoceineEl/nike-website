<script setup></script>
<template>
  <div
    class="max-container flex justify-between items-center flex-wrap gap-10"
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
    <h3 class="heading lg:w-72">
      Sign Up from <span class="text-coral-red">Updates</span> & Newsletter
    </h3>
    <div
      class="flex border justify-between border-slate-400 rounded-full p-2 max-lg:w-full"
    >
      <input
        type="text"
        class="outline-none sm:min-w-[400px] w-40 rounded-full ms-5 flex-1"
        placeholder="subscribe@example.com"
      />
      <button
        class="sm:px-7 sm:text-lg py-4 rounded-full bg-coral-red text-white flex items-center justify-center gap-2 leading-none border font-montserrat font-medium text-sm px-2"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
