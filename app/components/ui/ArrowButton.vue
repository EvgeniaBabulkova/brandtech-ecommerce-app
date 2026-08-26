<script setup lang="ts">
defineProps<{
  ariaLabel: string;
  disabled?: boolean;
}>();
</script>

<template>
  <button type="button" class="arrow-button" :aria-label="ariaLabel" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.arrow-button {
  width: 100%;
  padding: var(--spacing-sm) 0;
  border: 1px solid var(--col-border);
  background: var(--col-surface-primary);
  font: var(--font-label);
  cursor: pointer;
}

.arrow-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
