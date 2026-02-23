<template>
  <!-- <h1 class="text-amber-500">You did it!</h1>
  <h2>TEST h2</h2>
  <p class="bg-background text-foreground">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p class="bg-foreground text-golden">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->

  <HeroBanner />
  <AboutContainer />
  <BioContainer />
  <GalleryContainer />
  <PricingContainer />
  <PageFooter />
</template>

<script setup lang="ts">
import HeroBanner from '@/views/HeroBanner.vue';
import AboutContainer from '@/views/AboutContainer.vue';
import BioContainer from './views/BioContainer.vue';
import GalleryContainer from './views/GalleryContainer.vue';
import PricingContainer from './views/PricingContainer.vue';
import PageFooter from './views/PageFooter.vue';
</script>

<style scoped></style>
