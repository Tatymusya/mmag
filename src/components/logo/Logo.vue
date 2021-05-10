<template>
  <mmag-link 
    :to="'/'" 
    :class-link="'header__brand'" 
    :exact="true"
    :aria-label-link="'MmaG - shop of everything in the world and all sorts of nonsense'"
  > 
    <img src="../../assets/images/logo/MmaG2_logo.svg" alt="Logo" />
  </mmag-link>
</template>

<script>
import MmagLink from '@/components/Link/Link';

export default {
  name: 'MmagLogo',
  components: {
    MmagLink,
  },
};
</script>

<style lang="scss" scoped></style>
