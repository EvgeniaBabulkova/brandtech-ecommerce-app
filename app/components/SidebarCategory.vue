<script setup lang="ts">
import type { Category } from "~/types/catalog";

const { category, activeCategoryId } = defineProps<{
  category: Category;
  activeCategoryId: string;
}>();
</script>

<template>
  <div class="category-group">
    <NuxtLink
      :to="{
        path: '/',
        query: { category: category.id },
      }"
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

<style scoped>
.category-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.subcategory-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding-left: var(--spacing-md);
}

a {
  font: var(--font-body);
}

a.active {
  font: var(--font-label);
}
</style>
