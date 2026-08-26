<script setup lang="ts">
import type { ProductSize } from "~/types/catalog";

defineProps<{
  sizes: ProductSize[];
  selectedSize: ProductSize | null;
}>();

const emit = defineEmits<{
  select: [size: ProductSize];
}>();
</script>

<template>
  <div class="size-selector">
    <p class="option-label">SELECT SIZE</p>

    <div class="option-list">
      <UiSelectorButton
        v-for="size in sizes"
        :key="size"
        :selected="selectedSize === size"
        @click="emit('select', size)"
      >
        {{ size }}
      </UiSelectorButton>
    </div>
  </div>
</template>

<style scoped>
.size-selector {
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
</style>
