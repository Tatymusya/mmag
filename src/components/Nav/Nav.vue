<template>
  <nav class="header__nav nav">
    <!--ul role="list" class="nav__list">
      <li>
        <button>Catalog</button>
      </li>
      <li>
        <mmag-link 
          :to="'/'" 
          :class-parent="'nav'"
          :exact="true"
          :aria-label-link="'Link to the Home page'"
          :color-mode-link="'dark'"
        > 
          Home 
        </mmag-link>
      </li>
      <li>
        <mmag-link 
          :to="'/about'" 
          :class-parent="'nav'"
          :exact="true"
          :aria-label-link="'Link to the About page'"
          :color-mode-link="'dark'"
        > 
          About 
        </mmag-link>
      </li>
      <li>
        <mmag-link 
          :to="'/contact'" 
          :class-parent="'nav'"
          :exact="true"
          :aria-label-link="'Link to the Contact page'"
          :color-mode-link="'dark'"
        > 
          Contact 
        </mmag-link>
      </li>
    </ul-->
    Nav
  </nav>
</template>

<script>
import MmagLink from '@/components/Link/Link';

export default {
  name: 'MmagNav',
  components: {
    MmagLink,
  },
};
</script>

<style lang="scss" scoped>
  .nav {
    --gap-nav-link: var(--base-indent, 1.2rem);
  }
  .nav__list {
    display: flex;
    flex-direction: row;
    padding: 0;
  }
  .nav__link {
    margin: 0 var(--gap-nav-link);
  }
</style>