<template>
  <section ref="root" role="article" :aria-labelledby="headingId" :class="[
    'col-span-3 md:col-span-1 pt-12 pb-6 sm:px-4 xl:p-12 flex flex-col justify-between items-start h-full opacity-0 translate-y-4',
    visible ? 'animate-fadeUp' : ''
  ]" :style="{ '--delay': delay }">
    <div class="w-full">
      <figure class="w-full flex justify-center">
        <img :src="image" :alt="alt" class="w-56 h-56" />
        <figcaption class="sr-only">{{ title }}</figcaption>
      </figure>

      <h2 :id="headingId" class="my-6 ps-6 w-full text-left">{{ title }}</h2>

      <p class="text-justify mx-6 mb-10">{{ text }}</p>
    </div>


    <div class="w-full flex justify-center">
      <a :href="link" :aria-label="`${buttonText} — ${title}`"
        class="text-lg text-center text-background hover:text-foreground bg-foreground hover:bg-transparent border border-background hover:border-foreground w-1/2 py-4 rounded transition-colors duration-300 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2">{{
        buttonText }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { image, alt, title, text, buttonText, link, delay } = defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: '' },
  title: { type: String, required: true },
  text: { type: String, required: true },
  buttonText: { type: String, default: 'En savoir plus' },
  link: { type: String, default: '#work' },
  delay: { type: String, default: '0ms' }
})

const headingId = computed(() =>
  'about-' + title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visible.value = true
        if (observer && root.value) observer.unobserve(root.value)
      }
    })
  }, { threshold: 0.15 })

  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => {
  if (observer && root.value) observer.unobserve(root.value)
})
</script>
