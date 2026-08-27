<script setup lang="ts">
import type { Product } from "~/types/catalog";

const { product } = defineProps<{
  product: Product;
}>();

const route = useRoute();

// const imageLoaded = ref(false);
</script>

<template>
  <NuxtLink
    :to="{
      path: `/product/${product.id}`,
      query: { category: route.query.category }, // to preserve mainCategory
    }"
    class="product-card"
  >
    <div class="product-image">
      <!-- <div v-if="!imageLoaded && product.images?.[0]" class="image-skeleton"></div> -->
      <img
        v-if="product.images?.[0]"
        :src="product.images[0]"
        :alt="product.name.en || product.name.dk || 'Product image'"
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
  gap: var(--spacing-sm);

  .product-image {
    display: grid;
    place-items: center;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: var(--col-surface-secondary);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .product-brand {
    color: var(--col-text-secondary);
    font: var(--font-body-small);
  }

  .product-name {
    font: var(--font-body);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-price {
    margin-top: var(--spacing-xs);
    font: var(--font-label);
  }
}
</style>
