<script setup lang="ts">
defineProps<{
  selected: boolean;
}>();
</script>

<template>
  <button type="button" class="selector-button" :class="{ active: selected }">
    <slot />
  </button>
</template>

<style scoped>
.selector-button {
  min-width: 3.5rem;
  padding: var(--spacing-md);
  border: 1px solid var(--col-border);
  background: var(--col-surface-primary);
  font: var(--font-label);
  cursor: pointer;
}

.selector-button.active {
  border-color: var(--col-text-primary);
}
</style>
