<script setup lang="ts">
import type { GridItem } from "~/types/gridItem";

const { products: catalogProducts, categories, promotionalSpots } = useCatalog();
const route = useRoute();
const router = useRouter();

const products = computed(() => {
  let result = [...catalogProducts];
  const category = route.query.category?.toString();
  const sort = route.query.sort?.toString();

  if (category) {
    result = result.filter((product) => product.categories.includes(category));
  }
  if (sort === "price-asc") {
    result = result.toSorted((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
  }
  if (sort === "price-desc") {
    result = result.toSorted((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
  }
  return result;
});

const gridItems = computed<GridItem[]>(() => {
  const items: GridItem[] = products.value.map((product) => ({
    type: "product",
    data: product,
  }));

  const sortedPromotionalSpots = [...promotionalSpots].sort(
    (firstSpot, secondSpot) => firstSpot.position - secondSpot.position, // flip order
  );
  sortedPromotionalSpots.forEach((promotionalSpot) => {
    const insertionIndex = promotionalSpot.position - 1;
    if (insertionIndex <= items.length) {
      items.splice(insertionIndex, 0, {
        type: "promotion",
        data: promotionalSpot,
      });
    }
  });

  return items;
});

function updateSort(sort: string) {
  router.push({
    query: {
      ...route.query,
      sort: sort || undefined,
    },
  });
}

function resetFilters() {
  router.push({
    query: {
      category: route.query.category,
    },
  });
}

const hasActiveCategory = computed(() => Boolean(route.query.category?.toString()));
</script>

<template>
  <div class="plp">
    <PlpSidebar v-if="hasActiveCategory" :categoryTree="categories" />
    <section :class="hasActiveCategory ? 'products' : 'products products--full'">
      <div class="product-controls">
        <PlpSort :sort="route.query.sort?.toString() ?? ''" @update:sort="updateSort" />
        <button type="button" class="reset-filters-button" @click="resetFilters">Reset</button>
      </div>
      <div v-if="products.length" :class="hasActiveCategory ? 'product-grid' : 'product-grid product-grid--full'">
        <template v-for="item in gridItems">
          <PlpProductCard v-if="item.type === 'product'" :key="`product-${item.data.id}`" :product="item.data" />
          <PlpPromotionalSpot v-else :key="`promo-${item.data.position}`" :promotionalSpot="item.data" />
        </template>
      </div>
      <p v-else>There are no products to display :((</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/_mixins" as *;

.plp {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--spacing-xl);
  padding: 0 var(--spacing-md);
}

.product-controls {
  display: flex;
  gap: var(--spacing-sm);
}

.reset-filters-button {
  @include control-shell();

  &:hover {
    border-color: var(--col-text-primary);
  }
}

.products {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  &--full {
    grid-column: 1 / -1;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-md);

  &--full {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
</style>
