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
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    width: 6px;
    height: 6px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }

  select {
    @include control-shell();
    appearance: none;
    padding-right: 40px;
    width: 140px;
  }
}
</style>
