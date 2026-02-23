<template>
  <section id="bio-container" aria-label="Biographie" class="w-full flex justify-center items-center my-8 xl:my-16">
    <div class="w-full max-w-4xl relative px-4 sm:px-20">

      <div class="overflow-hidden rounded">
        <div class="flex transition-transform duration-700 ease-out"
          :style="{ transform: `translateX(-${current * 100}%)` }">
          <div v-for="(item, i) in itemsList" :key="i" class="w-full flex-shrink-0 p-6">
            <article aria-live="polite"
              class="border border-foreground p-6 rounded h-56 flex items-center justify-center">
              <p class="text-justify md:text-lg xl:text-xl">{{ item }}</p>
            </article>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button @click="prev" @keydown.enter.prevent="prev" aria-label="Précédent" type="button"
        class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-foreground hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button @click="next" @keydown.enter.prevent="next" aria-label="Suivant" type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-foreground hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: {
    type: Array as () => string[], default: () => [
      "Artiste autodidacte depuis plus de 15 ans, je souhaite aujourd'hui mettre mon art au service de la personnalisation de l'hommage que nous pouvons rendre à ceux qui nous ont quittés.",
      "De par mes activités professionnelles dans les domaines de l'animation et de la communication, j'ai su développer une capacité d'écoute et de médiation qui sont pour moi essentielles dans cette activité."
    ]
  }
})

const itemsList = props.items
const current = ref(0)
const intervalRef = ref<number | null>(null)
const AUTOPLAY_MS = 12_000

function next() {
  current.value = (current.value + 1) % itemsList.length
}

function prev() {
  current.value = (current.value - 1 + itemsList.length) % itemsList.length
}

function startAutoplay() {
  stopAutoplay()
  intervalRef.value = window.setInterval(() => next(), AUTOPLAY_MS)
}

function stopAutoplay() {
  if (intervalRef.value !== null) {
    clearInterval(intervalRef.value)
    intervalRef.value = null
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})

</script>

<style scoped></style>
