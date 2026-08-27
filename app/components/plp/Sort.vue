<script setup lang="ts">
defineProps<{
  sort: string;
}>();

const emit = defineEmits<{
  "update:sort": [sort: string];
}>();
</script>

<template>
  <div class="sort">
    <select
      id="sort"
      :value="sort"
      aria-label="Sort products"
      @change="emit('update:sort', ($event.target as HTMLSelectElement).value)"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price: low to high</option>
      <option value="price-desc">Price: high to low</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.sort {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
}

.sort label {
  font: $font-label;
}

.sort select {
  @include control-shell();
}
</style>
