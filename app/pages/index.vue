<template>
  <div class="plp">
    <Sidebar />
    <section class="products">
      <h1>All Products</h1>
      <div class="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  </div>
</template>

<style scoped>
.plp {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--spacing-xl);
  padding: 0 var(--spacing-md);
}

.products {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-md);
}
</style>
