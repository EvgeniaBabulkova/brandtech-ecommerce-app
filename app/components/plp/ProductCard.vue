<script setup lang="ts">
import type { Product } from "~/types/catalog";

const { product } = defineProps<{
  product: Product;
}>();
const route = useRoute();
const imageLoaded = ref(false);
</script>

<template>
  <NuxtLink
    :to="{
      path: `/product/${product.id}`,
      query: { category: route.query.category }, // preserve category context
    }"
    class="product-card"
  >
    <div class="product-image">
      <div v-if="!imageLoaded && product.images?.[0]" class="image-skeleton" />

      <NuxtImg
        v-if="product.images?.[0]"
        :src="product.images[0]"
        :alt="product.name.en || product.name.dk || 'Product image'"
        width="360"
        height="480"
        format="webp"
        quality="75"
        loading="lazy"
        decoding="async"
        :class="{ loaded: imageLoaded }"
        @load="imageLoaded = true"
      />

      <span v-else>Image missing</span>
    </div>

    <div class="product-info">
      <p class="product-brand">{{ product.brand }}</p>
      <h2 class="product-name">{{ product.name.en || product.name.dk }}</h2>
      <p class="product-price">{{ product.price }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;

  .product-image {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: $col-surface-secondary;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.2s ease;

      &.loaded {
        opacity: 1;
      }
    }
  }

  .image-skeleton {
    position: absolute;
    inset: 0;
    background: $col-surface-secondary;
    animation: skeleton-pulse 1.2s ease-in-out infinite;
  }

  @keyframes skeleton-pulse {
    0%,
    100% {
      background-color: $col-surface-secondary;
    }

    50% {
      background-color: $col-border;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
  }

  .product-brand {
    color: $col-text-secondary;
    font: $font-body-small;
  }

  .product-name {
    font: $font-body;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-price {
    margin-top: $spacing-xs;
    font: $font-label;
  }
}
</style>
