<script setup lang="ts">
defineProps<{
  selectedBrands: string[];
  selectedColors: string[];
  sort: string;
}>();

const { products } = useCatalog();
const route = useRoute();
const router = useRouter();

const brandOptions = computed(() => {
  const brands = [...new Set(products.map((product) => product.brand))];
  return brands.map((brand) => ({
    label: brand,
    value: brand,
  }));
});

const colorOptions = computed(() => {
  const colors = [...new Set(products.map((product) => product.color).filter((color) => color))];
  return colors.map((color) => ({
    label: color,
    value: color,
  }));
});

// updating url when controls change
function updateSort(sort: string) {
  router.push({
    query: {
      ...route.query,
      sort: sort || undefined,
    },
  });
}
function updateBrands(brands: string[]) {
  router.push({
    query: {
      ...route.query,
      brand: brands.length ? brands : undefined,
    },
  });
}
function updateColors(colors: string[]) {
  router.push({
    query: {
      ...route.query,
      color: colors.length ? colors : undefined,
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
</script>

<template>
  <div class="product-controls">
    <PlpSort :sort="sort" @update:sort="updateSort" />
    <UiMultiSelect
      label="Brand"
      :options="brandOptions"
      :selected-values="selectedBrands"
      @update:selected-values="updateBrands"
    />
    <UiMultiSelect
      label="Color"
      :options="colorOptions"
      :selected-values="selectedColors"
      @update:selected-values="updateColors"
    />
    <button type="button" class="reset-filters-button" @click="resetFilters">Reset all</button>
  </div>
</template>

<style scoped lang="scss">
.product-controls {
  display: flex;
  gap: $spacing-sm;
  flex-wrap: wrap;
}

.reset-filters-button {
  @include control-shell();

  &:hover {
    border-color: $col-text-primary;
  }
}
</style>
