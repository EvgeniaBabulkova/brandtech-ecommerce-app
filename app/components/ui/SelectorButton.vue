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
.selector-button {
  min-width: 3.5rem;
  @include control-shell();
}

.selector-button.active {
  border-color: $col-text-primary;
}
</style>
