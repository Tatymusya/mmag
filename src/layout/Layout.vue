<template>
  <div>
    <mmag-header />
    <mmag-main>
      <template #content>
        <slot> RVVVVVV </slot>
      </template>
    </mmag-main>
    <mmag-footer />
  </div>
</template>

<script>
import MmagHeader from '@/layout/Header';
import MmagMain from '@/layout/Main';
import MmagFooter from '@/layout/Footer';

export default {
  name: 'MmagLayout',
  components: {
    MmagHeader,
    MmagMain,
    MmagFooter,
  },
};
</script>
