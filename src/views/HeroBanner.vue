<template>
  <div class="relative h-screen w-full" role="banner">

    <h1 class="sr-only">Pauline Zotier - Peintre en lignes éternelles</h1>

    <img src="@/assets/images/herobanner_desktop.webp" alt="Bannière principale — logo et titre"
      aria-describedby="hero-desc"
      class="absolute inset-0 w-full h-screen hidden lg:block object-center object-cover" />

    <img src="@/assets/images/herobanner_tablet.webp" alt="Bannière principale — logo et titre"
      aria-describedby="hero-desc"
      class="absolute inset-0 w-full h-full hidden md:block lg:hidden object-center md:object-bottom object-cover" />

    <img src="@/assets/images/herobanner_smartphone.webp" alt="Bannière principale — logo et titre"
      aria-describedby="hero-desc"
      class="absolute inset-0 w-full h-full block md:hidden object-bottom md:object-bottom object-cover" />

    <p id="hero-desc" class="sr-only">
      On y voit un logo, le titre "Pauline Zotier", le sous-titre "Peintre en lignes éternelles",
      un paragraphe "Un hommage personalisé, souvenir à jamais gravé" et un autre paragraphe :
      "La peinture modélise des émotions et matérialise ce que parfois les mots sont incapables de retranscrire. Un
      message singulier, unique et précieux."
    </p>

    <div class="absolute inset-0 flex items-end justify-center pb-6 md:pb-16">
      <a href="#gallery" @click.prevent="scrollTo('#gallery')"
        class="text-lg md:text-2xl md:font-bold text-background hover:text-foreground bg-foreground hover:bg-transparent border border-background hover:border-foreground px-4 py-2 md:p-6 rounded transition-colors duration-300 ease-in-out rounded-lg"
        role="button">En savoir plus</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollTo = (hash: string) => {
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // ensure element can receive focus briefly
  const prevTab = el.getAttribute('tabindex')
  el.setAttribute('tabindex', '-1')
    ; (el as HTMLElement).focus({ preventScroll: true })
  setTimeout(() => {
    if (prevTab === null) el.removeAttribute('tabindex')
    else el.setAttribute('tabindex', prevTab)
  }, 1000)
}
</script>
