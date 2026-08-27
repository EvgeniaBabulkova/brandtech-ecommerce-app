<script setup lang="ts">
type MultiSelectOption = {
  label: string;
  value: string;
};

const { label, options, selectedValues } = defineProps<{
  label: string;
  options: MultiSelectOption[];
  selectedValues: string[];
}>();

const emit = defineEmits<{
  "update:selectedValues": [values: string[]];
}>();

const multiSelect = ref<HTMLDetailsElement | null>(null);

function toggleOption(value: string) {
  const nextValues = selectedValues.includes(value)
    ? selectedValues.filter((selectedValue) => selectedValue !== value)
    : [...selectedValues, value];

  emit("update:selectedValues", nextValues);
}

function handleClickOutside(event: MouseEvent) {
  if (multiSelect.value && !multiSelect.value.contains(event.target as Node)) {
    multiSelect.value.open = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <details class="multi-select" ref="multiSelect">
    <summary>{{ label }}</summary>

    <div class="multi-select-options">
      <label v-for="option in options" :key="option.value" class="option">
        <input type="checkbox" :checked="selectedValues.includes(option.value)" @change="toggleOption(option.value)" />
        <span>{{ option.label }}</span>
      </label>
    </div>
  </details>
</template>

<style scoped lang="scss">
.multi-select {
  position: relative;

  summary {
    @include control-shell();
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-sm;
    width: 140px;
    list-style: none;
    cursor: pointer;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: "";
      width: 6px;
      height: 6px;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg);
    }
  }
}

.multi-select-options {
  position: absolute;
  z-index: 10;
  top: 100%;
  min-width: 100%;
  padding: $spacing-sm;
  border: 1px solid $col-border;
  background: $col-surface-primary;
}

.option {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-xs 0;
  font: $font-body;
  cursor: pointer;
}
</style>
