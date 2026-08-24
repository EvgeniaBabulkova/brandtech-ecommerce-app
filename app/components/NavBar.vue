<template>
  <nav class="nav">
    <NuxtLink to="/" class="logo"> BrandTech </NuxtLink>

    <div class="nav-links">
      <NuxtLink to="/">All</NuxtLink>
      <NuxtLink to="/?category=men">Men</NuxtLink>
      <NuxtLink to="/?category=women">Women</NuxtLink>
      <NuxtLink to="/?category=kids">Kids</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--col-border);
}

.logo {
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
}
</style>
