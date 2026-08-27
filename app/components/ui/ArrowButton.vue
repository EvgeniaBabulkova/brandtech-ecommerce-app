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

<style scoped lang="scss">
@use "~/assets/css/_mixins" as *;

.arrow-button {
  width: 100%;
  @include control-shell;
}

.arrow-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
