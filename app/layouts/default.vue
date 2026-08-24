<template>
  <div>
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}
</style>
