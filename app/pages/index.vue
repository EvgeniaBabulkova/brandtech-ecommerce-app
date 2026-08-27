<script setup lang="ts">
import type { GridItem } from "~/types/gridItem";

const { products: catalogProducts, categories, promotionalSpots, activeMainCategory } = useCatalog();
const route = useRoute();

const products = computed(() => {
  let result = [...catalogProducts];
  const category = route.query.category?.toString();

  if (category) {
    result = result.filter((product) => product.categories.includes(category));
  }
  if (selectedBrands.value.length) {
    result = result.filter((product) => selectedBrands.value.includes(product.brand));
  }
  if (selectedColors.value.length) {
    result = result.filter((product) => selectedColors.value.includes(product.color));
  }
  if (sort.value === "price-asc") {
    result = result.toSorted((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
  }
  if (sort.value === "price-desc") {
    result = result.toSorted((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
  }
  return result;
});

const gridItems = computed<GridItem[]>(() => {
  const items: GridItem[] = products.value.map((product) => ({
    type: "product",
    data: product,
  }));

  const hasFiltersOrSorting = selectedBrands.value.length || selectedColors.value.length || sort.value;
  if (hasFiltersOrSorting) return items;

  const sortedPromotionalSpots = [...promotionalSpots].sort(
    (firstSpot, secondSpot) => firstSpot.position - secondSpot.position, // flips order
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

// product controls state
const selectedBrands = computed(() => {
  const brand = route.query.brand;
  if (!brand) return [];
  return Array.isArray(brand) ? brand.map(String) : [brand.toString()];
});

const selectedColors = computed(() => {
  const color = route.query.color;
  if (!color) return [];
  return Array.isArray(color) ? color.map(String) : [color.toString()];
});

const sort = computed(() => route.query.sort?.toString() ?? "");

const hasActiveCategory = computed(() => Boolean(activeMainCategory.value));
</script>

<template>
  <div class="plp">
    <PlpSidebar v-if="hasActiveCategory" :categoryTree="categories" />
    <section :class="hasActiveCategory ? 'products' : 'products products--full'">
      <PdpProductControls :selected-brands="selectedBrands" :selected-colors="selectedColors" :sort="sort" />
      <p v-if="route.query.category && !activeMainCategory">Oops, couldn't find that category!</p>

      <div v-else-if="products.length" :class="hasActiveCategory ? 'product-grid' : 'product-grid product-grid--full'">
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
.plp {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: $spacing-xl;
  padding: 0 $spacing-md;
}

.products {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  &--full {
    grid-column: 1 / -1;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: $spacing-md;

  &--full {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (max-width: $breakpoint-mobile) {
  .plp {
    display: block;
  }

  .product-grid,
  .product-grid--full {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
