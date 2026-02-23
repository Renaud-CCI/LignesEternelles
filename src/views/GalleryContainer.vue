<template>
  <section id="gallery" :aria-hidden="isOpen ? 'true' : 'false'"
    class="w-full flex justify-center items-center bg-neutral-900">
    <div class="w-full xl:w-5/6 grid grid-cols-4 px-2 sm:px-40 pt-12 pb-8">
      <div class="col-span-1 flex flex-col justify-between gap-2 items-center">
        <img role="button" tabindex="0"
          @click="openModal('/src/assets/images/gallery_1.webp', 'Photo d\'un avion bleu et d\'un mongolfière aux couleurs pastel peints sur un cercueil')"
          @keydown.enter.prevent="openModal('/src/assets/images/gallery_1.webp', 'Photo d\'un avion bleu et d\'un mongolfière aux couleurs pastel peints sur un cercueil')"
          @keydown.space.prevent="openModal('/src/assets/images/gallery_1.webp', 'Photo d\'un avion bleu et d\'un mongolfière aux couleurs pastel peints sur un cercueil')"
          src="@/assets/images/gallery_1.webp"
          alt="Photo d'un avion bleu et d'un mongolfière aux couleurs pastel peints sur un cercueil"
          class="cursor-pointer max-w-full h-28 sm:h-32 object-cover rounded" />

        <img role="button" tabindex="0"
          @click="openModal('/src/assets/images/gallery_2.webp', 'Photo de dessins et d\'un collage de la vierge à l\'enfant du Puy-en-Velay sur un cercueil. Les dessins peints représentent des mures sur un rameau de ronce, un vélo et des champignons')"
          @keydown.enter.prevent="openModal('/src/assets/images/gallery_2.webp', 'Photo de dessins et d\'un collage de la vierge à l\'enfant du Puy-en-Velay sur un cercueil. Les dessins peints représentent des mures sur un rameau de ronce, un vélo et des champignons')"
          @keydown.space.prevent="openModal('/src/assets/images/gallery_2.webp', 'Photo de dessins et d\'un collage de la vierge à l\'enfant du Puy-en-Velay sur un cercueil. Les dessins peints représentent des mures sur un rameau de ronce, un vélo et des champignons')"
          src="@/assets/images/gallery_2.webp"
          alt="Photo de dessins et d'un collage de la vierge à l'enfant du Puy-en-Velay sur un cercueil."
          class="cursor-pointer max-w-full h-28 sm:h-32 object-cover rounded" />

        <img role="button" tabindex="0"
          @click="openModal('/src/assets/images/gallery_3.webp', 'Photo d\'une colombe blanche peinte sur un cercueil')"
          @keydown.enter.prevent="openModal('/src/assets/images/gallery_3.webp', 'Photo d\'une colombe blanche peinte sur un cercueil')"
          @keydown.space.prevent="openModal('/src/assets/images/gallery_3.webp', 'Photo d\'une colombe blanche peinte sur un cercueil')"
          src="@/assets/images/gallery_3.webp" alt="Photo d'une colombe blanche peinte sur un cercueil"
          class="cursor-pointer max-w-full h-28 sm:h-32 object-cover rounded" />

        <p class="text-neutral-500 text-xs w-full sm:w-1/2 text-center">Cliquez sur les images pour les agrandir</p>
      </div>

      <div class="col-span-3 flex flex-col justify-center items-start ps-2 lg:ps-0">
        <h2 class="pb-4 lg:pb-8">Travailler avec moi</h2>
        <p class="py-2 md:text-lg">
          Vous souhaitez rendre ce moment unique à travers un dernier hommage personnalisé ?
        </p>
        <p class="py-2 md:text-lg">
          Je vous propose une organisation simple pour faciliter mon intervention. Vous pouvez me contacter directement
          pour que nous puissions parler de votre souhait de personnalisation. Dans une second temps, j'entre en contact
          avec l'équipe funéraire qui vous accompagne afin de pouvoir réaliser vos lignes éternelles.
        </p>
        <p class="py-2 md:text-lg">
          Si vous n'avez pas d'idées précises ?
        </p>
        <p class="py-2 md:text-lg">
          Je mets à votre disposition un catalogue de propositions qui peut vous inspirer.
        </p>
        <p class="py-2 md:text-lg">
          Je reste à votre écoute.
        </p>
      </div>
    </div>

    <!-- Lightbox modal -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75" @click.self="closeModal"
      role="dialog" aria-modal="true" :aria-labelledby="'modal-title'">
      <div class="relative max-w-5xl w-full mx-4">
        <button ref="closeBtn" @click="closeModal" aria-label="Fermer l'image" id="modal-close"
          class="absolute -top-4 -right-4 z-60 bg-black/70 text-foreground rounded-full p-2 focus:outline-none focus:ring-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 id="modal-title" class="sr-only">Image agrandie</h3>
        <img :src="src" :alt="alt" class="mx-auto max-h-[85vh] w-auto rounded shadow-lg" />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const isOpen = ref(false)
const src = ref('')
const alt = ref('')
const prevActive = ref<HTMLElement | null>(null)
const closeBtn = ref<HTMLElement | null>(null)

async function openModal(s: string, a: string) {
  src.value = s
  alt.value = a
  prevActive.value = document.activeElement as HTMLElement | null
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  if (closeBtn.value) (closeBtn.value as HTMLElement).focus()
}

function closeModal() {
  isOpen.value = false
  src.value = ''
  alt.value = ''
  document.body.style.overflow = ''
  if (prevActive.value) prevActive.value.focus()
}

function onKey(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') closeModal()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.z-60 {
  z-index: 60;
}
</style>
