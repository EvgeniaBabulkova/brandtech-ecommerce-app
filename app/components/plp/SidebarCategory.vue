<script setup lang="ts">
import type { Category } from "~/types/catalog";

const {
  category,
  activeCategoryId,
  topLevel = false,
} = defineProps<{
  category: Category;
  activeCategoryId: string;
  topLevel?: boolean;
}>();
</script>

<template>
  <div class="category-group" :class="{ 'category-group--top-level': topLevel }">
    <NuxtLink
      :to="{
        path: '/',
        query: { category: category.id },
      }"
      class="category-link"
      :class="{ active: activeCategoryId === category.id }"
    >
      {{ category.name.en }}
    </NuxtLink>

    <div v-if="category.categories?.length" class="subcategory-list">
      <SidebarCategory
        v-for="childCategory in category.categories"
        :key="childCategory.id"
        :category="childCategory"
        :active-category-id="activeCategoryId"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/_mixins" as *;

.category-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  &--top-level {
    padding: var(--spacing-md) 0 var(--spacing-sm);
    border-top: 1px solid var(--col-border);
  }
}

.category-link {
  width: fit-content;
  @include link-state;
}

.subcategory-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding-left: var(--spacing-sm);
}
</style>
