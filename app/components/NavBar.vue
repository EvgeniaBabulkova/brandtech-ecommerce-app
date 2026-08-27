<script setup lang="ts">
const { mainCategories, activeMainCategory } = useCatalog();
</script>

<template>
  <nav class="nav">
    <div class="nav-links">
      <NuxtLink
        v-for="category in mainCategories"
        :key="category.id"
        :to="{
          path: '/',
          query: { category: category.id },
        }"
        :class="{ active: activeMainCategory?.id === category.id }"
      >
        {{ category.name.en }}
      </NuxtLink>
    </div>

    <NuxtLink to="/" class="logo"> BrandTech </NuxtLink>

    <div class="nav-actions">
      <button type="button" aria-label="Wishlist">♡</button>
      <button type="button" aria-label="Shopping card">Card</button>
      <button type="button" aria-label="Account">User</button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: $spacing-md;
  border-bottom: 1px solid $col-border;
  background: $col-surface-primary;
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-links {
  display: flex;
  gap: $spacing-lg;
  justify-self: start;

  a {
    font: $font-body;
    text-transform: uppercase;

    &.active {
      font: $font-label;
    }
  }
}

.logo {
  justify-self: center;
  font-weight: 700;
  font-size: 24px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  justify-self: end;

  button {
    padding: 0;
    color: $col-text-primary;
    background: none;
    border: none;
    cursor: pointer;
  }
}

@media (max-width: $breakpoint-mobile) {
  .nav {
    grid-template-columns: auto 1fr;
    gap: $spacing-md;
  }

  .logo {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    font-size: 20px;
  }

  .nav-links {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    gap: $spacing-md;
  }

  .nav-actions {
    display: none;
  }
}
</style>
