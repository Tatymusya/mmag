<template>
  <main class="page__main main">
    <mmag-container-limiter>
      <slot name="content">Content</slot>
    </mmag-container-limiter>
  </main>
</template>

<script>
import MmagContainerLimiter from '@/layout/Limiter';

export default {
  name: 'MmagMain',
  components: {
    MmagContainerLimiter
  }
};
</script>

<style lang="scss" scoped>
  .main {
    --indent-main: var(--base-unit, 0.6rem);
    padding: var(--indent-main) calc(var(--indent-main) * 2);
  }
</style>
