<script setup lang="ts">
const { images, productName } = defineProps<{
  images: string[];
  productName: string;
}>();

const selectedImageIndex = ref(0);

const selectedImage = computed(() => {
  return images[selectedImageIndex.value];
});

function selectImage(index: number) {
  selectedImageIndex.value = index;
}
</script>

<template>
  <section class="product-gallery">
    <div class="product-thumbnails">
      <button
        v-for="(image, index) in images"
        :key="image"
        type="button"
        class="thumbnail-button"
        :class="{ active: selectedImageIndex === index }"
        @click="selectImage(index)"
      >
        <img :src="image" :alt="`${productName} image ${index + 1}`" />
      </button>
    </div>

    <div class="selected-image">
      <img v-if="selectedImage" :src="selectedImage" :alt="productName" />

      <span v-else>Image missing</span>
    </div>
  </section>
</template>

<style scoped>
.product-gallery {
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: var(--spacing-md);
  min-width: 0;
}

.product-thumbnails {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.thumbnail-button {
  width: 100%;
  padding: 0;
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
}

.thumbnail-button.active {
  border-color: var(--col-text-primary);
}

.thumbnail-button img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.selected-image {
  display: grid;
  place-items: center;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--col-surface-secondary);
}

.selected-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
