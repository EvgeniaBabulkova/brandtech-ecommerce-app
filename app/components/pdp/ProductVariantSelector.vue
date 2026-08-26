<script setup lang="ts">
import type { ProductVariant } from "~/types/catalog";

defineProps<{
  variants: ProductVariant[];
  selectedVariantIndex: number;
}>();

const emit = defineEmits<{
  select: [index: number];
}>();
</script>

<template>
  <div class="variant-selector">
    <p class="option-label">SELECT COLOR</p>

    <div class="option-list">
      <button
        v-for="(variant, index) in variants"
        :key="index"
        type="button"
        class="variant-button"
        :class="{ active: selectedVariantIndex === index }"
        @click="emit('select', index)"
      >
        <img
          v-if="variant.images?.[0]"
          :src="variant.images[0]"
          :alt="variant.color || 'Product variant'"
          class="variant-image"
        />
        <span v-else class="variant-fallback">{{ variant.color }} </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.variant-selector {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.option-label {
  font: var(--font-label-small);
}

.option-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.variant-button {
  width: 4.5rem;
  height: 6rem;
  padding: 0;
  border: 1px solid var(--col-border);
  background: var(--col-surface-primary);
  cursor: pointer;
  overflow: hidden;
}

.variant-button.active {
  border-color: var(--col-text-primary);
}

.variant-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.variant-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--spacing-xs);
  font: var(--font-label-small);
  text-align: center;
}
</style>
