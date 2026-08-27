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
        class="sidebar-link sidebar-link--see-all"
        :class="{ active: activeCategoryId === activeMainCategory.id }"
      >
        See all
      </NuxtLink>

      <PlpSidebarCategory
        v-for="category in activeMainCategory.categories"
        :key="category.id"
        :category="category"
        :active-category-id="activeCategoryId"
        top-level
      />
    </nav>
  </aside>
</template>

<style scoped lang="scss">
@use "~/assets/css/_mixins" as *;

.sidebar {
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  position: sticky;
  top: 5.5rem;
  align-self: start;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
}

.sidebar-link {
  width: fit-content;
  @include link-state;

  &--see-all {
    margin-bottom: var(--spacing-md);
  }
}
</style>
