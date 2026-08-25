<script setup lang="ts">
const { products: catalogProducts, categories } = useCatalog();
const route = useRoute();

const products = computed(() => {
  let result = catalogProducts;

  const category = route.query.category?.toString();
  // const sort = route.query.sort?.toString();

  if (category) {
    result = result.filter((product) => product.categories.includes(category));
  }

  // if (sort === "price-asc") {
  //   result = result.toSorted((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
  // }

  // if (sort === "price-desc") {
  //   result = result.toSorted((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
  // }

  return result;
});
</script>

<template>
  <div class="plp">
    <Sidebar :categoryTree="categories" />
    <section class="products">
      <h1>All Products</h1>
      <div v-if="products.length" class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product />
      </div>
      <p v-else>There are no products to display :((</p>
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-md);
}
</style>
