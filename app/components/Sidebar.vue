<script setup lang="ts">
const { activeCategoryId, activeMainCategory } = useCatalog();
</script>

<template>
  <aside v-if="activeMainCategory" class="sidebar">
    <h3>{{ activeMainCategory.name.en }}</h3>

    <nav class="sidebar-links">
      <NuxtLink
        :to="{
          path: '/',
          query: { category: activeMainCategory.id },
        }"
        :class="{ active: activeCategoryId === activeMainCategory.id }"
      >
        See all
      </NuxtLink>

      <SidebarCategory
        v-for="category in activeMainCategory.categories"
        :key="category.id"
        :category="category"
        :active-category-id="activeCategoryId"
      />
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.sidebar-links a {
  color: var(--col-text-secondary);
}

.sidebar-links a:hover {
  color: var(--col-text-primary);
}
</style>
