<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}
</style>
