<template>
  <footer class="page__footer footer">
    <mmag-container-limiter>
      Footer &copy;
    </mmag-container-limiter>
  </footer>
</template>

<script>
import MmagContainerLimiter from '@/layout/Limiter';

export default {
  name: 'MmagFooter',
  components: {
    MmagContainerLimiter
  }
};
</script>

<style lang="scss" scoped>
  .footer {
    --bg-footer: var(--base-dark-color, #333);
    --indent-footer: var(--base-unit, 0.6rem);
    padding: var(--indent-footer) calc(var(--indent-footer) * 2);
    background: var(--bg-footer);
  }
</style>
