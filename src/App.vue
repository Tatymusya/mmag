<template>
  <mmag-layout>
    <router-view></router-view>
  </mmag-layout>
</template>

<script>
import MmagLayout from '@/layout/Layout';

export default {
  components: {
    MmagLayout
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/styles';
</style>
