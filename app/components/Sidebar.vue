<template>
  <aside class="sidebar">
    <h3>Categories</h3>

    <nav class="sidebar-links">
      <a href="#">New In</a>
      <a href="#">Clothes</a>
      <a href="#">Jeans</a>
      <a href="#">Shirts</a>
      <a href="#">Jackets</a>
      <a href="#">Sale</a>
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
