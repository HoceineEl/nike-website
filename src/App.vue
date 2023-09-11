<script setup>
import {
  Hero,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
  SuperQuality,
  PopularProducts,
} from "./sections";
import Nav from "./components/Nav.vue";
import ScrollToggler from "./components/ScrollToggler.vue";
</script>

<template>
  <main class="relative">
    <Nav />
    <section id="home" class="xl:padding-l wide:padding-r padding-b overflow-hidden">
      <Hero />
    </section>
    <section id="products" class="padding">
      <PopularProducts />
    </section>
    <section id="about-us" class="padding">
      <SuperQuality />
    </section>
    <section class="padding-x py-10"><Services /></section>
    <section class="padding"><SpecialOffers /></section>
    <section class="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section id="contact-us" class="padding-x sm:py-32 py-16">
      <Subscribe />
    </section>
    <section id="#" class="padding-x padding-t pb-8 bg-black"><Footer /></section>
    <ScrollToggler />
  </main>
</template>

<style scoped></style>
