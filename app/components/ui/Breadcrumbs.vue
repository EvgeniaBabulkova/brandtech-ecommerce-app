<script setup lang="ts">
import type { Category } from "~/types/catalog";

defineProps<{
  items: Category[];
}>();
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="item.id">
      <span v-if="index > 0" class="separator">/</span>
      <NuxtLink :to="{ path: '/', query: { category: item.id } }" class="breadcrumb-link">
        {{ item.name.en || item.name.dk }}
      </NuxtLink>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font: $font-body-small;
  text-transform: uppercase;

  .breadcrumb-link {
    color: $col-text-secondary;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .separator {
    color: $col-text-secondary;
  }
}
</style>
