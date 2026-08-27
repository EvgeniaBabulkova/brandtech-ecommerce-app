<script setup lang="ts">
const { images, productName } = defineProps<{
  images: string[];
  productName: string;
}>();

const selectedImageIndex = ref(0);
const thumbnailList = ref<HTMLElement | null>(null);

// reset the active img index when changing variants
watch(
  () => images,
  () => {
    selectedImageIndex.value = 0;
  },
);

// keep the selected img in view
watch(selectedImageIndex, async () => {
  await nextTick();
  const activeThumbnail = thumbnailList.value?.querySelector<HTMLElement>(".thumbnail-button.active");
  activeThumbnail?.scrollIntoView({ block: "nearest" });
});

const selectedImage = computed(() => {
  return images[selectedImageIndex.value];
});

function selectImage(index: number) {
  selectedImageIndex.value = index;
}

function showPreviousImage() {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--;
  }
}

function showNextImage() {
  if (selectedImageIndex.value < images.length - 1) {
    selectedImageIndex.value++;
  }
}
</script>

<template>
  <section class="product-gallery">
    <div class="thumbnail-navigation">
      <UiArrowButton ariaLabel="Previous image" @click="showPreviousImage">↑</UiArrowButton>
      <div ref="thumbnailList" class="product-thumbnails">
        <button
          v-for="(image, index) in images"
          :key="image"
          type="button"
          class="thumbnail-button"
          :class="{ active: selectedImageIndex === index }"
          @click="selectImage(index)"
        >
          <NuxtImg
            :src="image"
            :alt="`${productName} image ${index + 1}`"
            width="120"
            height="160"
            format="webp"
            quality="70"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
      <UiArrowButton ariaLabel="Next image" @click="showNextImage">↓</UiArrowButton>
    </div>

    <div class="selected-image">
      <NuxtImg
        v-if="selectedImage"
        :src="selectedImage"
        :alt="productName"
        width="600"
        height="800"
        format="webp"
        quality="75"
      />

      <span v-else>Image missing</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-gallery {
  display: grid;
  grid-template-columns: 5rem minmax(0, 1fr);
  gap: $spacing-md;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.thumbnail-navigation {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  min-height: 0;
  gap: $spacing-xs;
}

.product-thumbnails {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  overflow-y: auto;
  scrollbar-width: none;
}

.thumbnail-button {
  width: 100%;
  padding: 0;
  border: 1px solid transparent;
  background: none;
  cursor: pointer;

  &.active {
    border-color: $col-text-primary;
  }

  :deep(img) {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
  }
}

.selected-image {
  overflow: hidden;
  background: $col-surface-secondary;
}

.selected-image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: $breakpoint-mobile) {
  .product-gallery {
    display: block;
    aspect-ratio: auto;
    overflow: visible;
  }

  .thumbnail-navigation {
    display: none;
  }
}
</style>
