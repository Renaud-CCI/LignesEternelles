<template>
  <div class="w-full flex justify-center items-center bg-neutral-900">

    <section aria-label="À propos" class="xl:w-5/6 grid grid-cols-3 items-stretch">
      <AboutCard v-for="(card, i) in cards" :key="card.title" v-bind="card" :delay="`${i * 120}ms`" />
    </section>
  </div>
</template>

<script setup lang="ts">
import AboutCard from '@/components/AboutCard.vue'
import about1 from '@/assets/images/about_1.webp'
import about2 from '@/assets/images/about_2.webp'
import about3 from '@/assets/images/about_3.webp'

const cards = [
  {
    image: about1,
    alt: "Peinture florale sur panneau de bois, avec des épis de blé et des fleurs jaunes de primevère officinale",
    title: "Mon projet",
    text: "Le jour où ma grand mère est décédée, j'ai eu la chance de pouvoir peindre sur son cercueil. Un moment précieux et plein d'émotions pour moi. Les membres de notre famille et ses amis étaient en joie en apercevant ces instants de vie qui avaient pris forme sur un objet d'ordinaire très sobre. Un déclic pour moi !",
    buttonText: "Qui suis-je ?",
    link: "#bio-container"
  },
  {
    image: about2,
    alt: "Photo d'une main touchant un tronc d'arbre à l'écorce rugueuse",
    title: "Mes Valeurs",
    text: "Je souhaite établir un lien direct avec les familles en deuil, être une oreille attentive afin de retranscrire le plus fidèlement possible leur souhait de personnalisation. Une démarche écologique avec un choix de peinture à l'eau biosourcée et biodégradable, respectueuse des sols, du vivant.",
    buttonText: "Galerie photos",
    link: "#gallery"
  },
  {
    image: about3,
    alt: "Photo d'un arbre dans un champs dont le houppier est en forme de coeur, avec un ciel nuageux en arrière plan",
    title: "Ma proposition",
    text: "Je vous propose un catalogue afin de vous accompagner dans votre choix. Des modèles divers et variés personnalisables. Vous pouvez également me proposer des modèles personnels pour une création sur mesure. Je vous invite à consulter ma galerie afin de voir ce que je suis en capacité de réaliser.",
    buttonText: "Tarifs",
    link: "#pricing"
  }
]
</script>
