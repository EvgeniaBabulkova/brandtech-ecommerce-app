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
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--col-border);
  background: var(--col-surface-primary);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
  justify-self: start;

  a {
    font: var(--font-body);
    text-transform: uppercase;

    &.active {
      font: var(--font-label);
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
  gap: var(--spacing-md);
  justify-self: end;

  button {
    padding: 0;
    color: var(--col-text-primary);
    background: none;
    border: none;
    cursor: pointer;
  }
}
</style>
