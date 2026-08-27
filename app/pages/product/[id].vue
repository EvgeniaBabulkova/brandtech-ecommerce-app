<script setup lang="ts">
import type { ProductSize } from "~/types/catalog";

const route = useRoute();
const { products, activeCategoryPath } = useCatalog();
const productId = Number(route.params.id);
const product = computed(() => products.find((product) => product.id === productId));

// meta
useSeoMeta({
  title: () =>
    product.value ? `${product.value.brand} - ${product.value.name.en || product.value.name.dk}` : "Product",
  description: () =>
    product.value
      ? `Shop ${product.value.name.en || product.value.name.dk} by ${product.value.brand} for ${product.value.price} DKK.`
      : "View product details.",
});

// creating array of all product variants
const productVariants = computed(() => {
  if (!product.value) return [];
  const mainVariant = {
    color: product.value.color,
    size: product.value.size,
    stock: product.value.stock,
    images: product.value.images,
  };
  return [mainVariant, ...(product.value.variant ?? [])];
});

// all info updates depends on selectedvariantindex
const selectedVariantIndex = ref(0);
const selectedVariant = computed(() => {
  return productVariants.value[selectedVariantIndex.value];
});

// info updates
const displayedImages = computed(() =>
  selectedVariant.value?.images?.length ? selectedVariant.value.images : (product.value?.images ?? []),
);
const displayedSizes = computed(() => selectedVariant.value?.size ?? []);
const displayedStock = computed(() => selectedVariant.value?.stock);

const selectedSize = ref<ProductSize | null>(null);

function selectVariant(index: number) {
  selectedVariantIndex.value = index;
  selectedSize.value = null;
}

function selectSize(size: ProductSize) {
  selectedSize.value = size;
}

function getStockLabel(stock: string | number | undefined) {
  if (stock === undefined) return "";

  if (stock === "Unlimited") {
    return "In stock";
  }

  if (stock === 0) {
    return "Out of stock";
  }

  if (typeof stock === "number" && stock < 5) {
    return `Limited stock: ${stock} left`;
  }

  return "In stock";
}
</script>

<template>
  <section v-if="product" class="product-section">
    <UiBreadcrumbs v-if="activeCategoryPath.length" :items="activeCategoryPath" />
    <div class="product-details">
      <PdpProductGallery :images="displayedImages" :product-name="product.name.en || product.name.dk || 'Product'" />

      <div class="product-info">
        <div class="product-heading">
          <p class="product-brand">{{ product.brand }}</p>

          <h1 class="product-name">
            {{ product.name.en || product.name.dk }}
          </h1>

          <p class="product-price">{{ product.price }} DKK</p>
        </div>
        <PdpProductVariantSelector
          v-if="productVariants.length > 1"
          :variants="productVariants"
          :selected-variant-index="selectedVariantIndex"
          @select="selectVariant"
        />

        <PdpProductSizeSelector :sizes="displayedSizes" :selected-size="selectedSize" @select="selectSize" />

        <div class="purchase-section">
          <p class="stock-label">
            {{ getStockLabel(displayedStock) }}
          </p>

          <button type="button" class="add-to-cart-button" :disabled="displayedStock === 0">ADD TO CART</button>
        </div>
      </div>
    </div>
  </section>

  <p v-else>Product not found</p>
</template>

<style scoped>
.product-section {
  display: grid;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
}

.product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.product-heading {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.product-brand {
  color: var(--col-text-secondary);
  font: var(--font-body-small);
}

.product-name {
  font: var(--font-heading-md);
}

.product-price {
  font: var(--font-heading-sm);
}

.purchase-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.stock-label {
  font: var(--font-body);
}

.add-to-cart-button {
  width: 100%;
  padding: var(--spacing-md);
  border: 0;
  background: var(--col-text-primary);
  color: var(--col-surface-primary);
  font: var(--font-button);
  cursor: pointer;
}

.add-to-cart-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
