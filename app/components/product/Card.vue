<template>
  <article class="product-card">
    <div class="product-image">
      <span>Product image</span>
    </div>

    <div class="product-info">
      <p class="product-brand">Vero Moda</p>
      <h2 class="product-name">Wrap Jacket</h2>
      <p class="product-price">549.95 DKK</p>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.product-image {
  display: grid;
  place-items: center;
  aspect-ratio: 3 / 4;
  background: var(--col-surface-secondary);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.product-brand {
  color: var(--col-text-secondary);
  font-size: 0.875rem;
}

.product-name {
  font-size: 1rem;
}

.product-price {
  margin-top: var(--spacing-xs);
}
</style>
