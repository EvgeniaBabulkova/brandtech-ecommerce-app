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
.sidebar {
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
  position: sticky;
  top: 5rem;
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
    margin-bottom: $spacing-md;
  }
}

@media (max-width: $breakpoint-mobile) {
  .sidebar {
    min-width: 0;
    position: static;
    gap: $spacing-sm;
    margin-bottom: $spacing-md;
  }

  .sidebar-links {
    flex-direction: row;
    gap: $spacing-md;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: $spacing-sm;
  }

  .sidebar-link {
    flex-shrink: 0;

    &--see-all {
      margin-bottom: 0;
    }
  }
}
</style>
