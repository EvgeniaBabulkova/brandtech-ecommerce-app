<script setup lang="ts">
import type { PromotionalSpot } from "~/types/catalog";

defineProps<{
  promotionalSpot: PromotionalSpot;
}>();
</script>

<template>
  <NuxtLink :to="promotionalSpot.link" class="promotional-spot" :class="`promotional-spot--${promotionalSpot.type}`">
    <img :src="promotionalSpot.image.imageUrl" :alt="promotionalSpot.imageAltText || promotionalSpot.image.alt" />
  </NuxtLink>
</template>

<style scoped>
.promotional-spot {
  overflow: hidden;
}

.promotional-spot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
}

.promotional-spot--2x1 {
  grid-column: span 2;
}

.promotional-spot--2x2 {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
