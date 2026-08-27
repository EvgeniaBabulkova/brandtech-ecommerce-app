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

<style scoped lang="scss">
@use "~/assets/css/_mixins" as *;

.selector-button {
  min-width: 3.5rem;
  @include control-shell();
}

.selector-button.active {
  border-color: var(--col-text-primary);
}
</style>
