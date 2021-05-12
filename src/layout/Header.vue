<template>
  <header class="page__header header">
    <div class="header__top" v-if="isScreenLargerThan">
      <mmag-container-limiter>
        <div class="header__container">
          <p class="header__info">IPsum loem dolor</p>
          <!--mmag-chat-opener /-->
          <mmag-profile-header class="header__profile" />
        </div>
      </mmag-container-limiter>
    </div>
    <div class="header__main">
      <mmag-container-limiter>
        <div class="header__container">
          <div class="header__logo">
            <mmag-logo />
          </div>
          <mmag-nav class="header__nav" />
          <mmag-shopping-cart class="header__shop-cart" />
        </div>
      </mmag-container-limiter>
    </div>
    <transition 
      enter-class="fade-in-up-enter"
      enter-active-class="fade-in-up-enter-active"
      enter-class-to="fade-in-up-enter-to"
    >
      <mmag-chat-wrapper v-if="isRequested" />
    </transition>
  </header>
</template>

<script>
import MmagContainerLimiter from '@/layout/Limiter';
import MmagLogo from '@/components/Logo/Logo';
import MmagNav from '@/components/Nav/Nav';
import MmagProfileHeader from '@/components/Profile/ProfileHeader';
import MmagShoppingCart from '@/components/ShoppingCart/ShoppingCart';
import MmagChatOpener from '@/components/Chat/ChatOpener';
import useMediaQuery from '@/utils/useMediaQuery';

export default {
  name: 'MmagHeader',
  components: {
    MmagContainerLimiter,
    MmagLogo,
    MmagNav,
    MmagProfileHeader,
    MmagShoppingCart,
    MmagChatOpener,
    MmagChatWrapper: () => import(/* webpackPrefetch: true */ '@/components/Chat/ChatWrapper')
  },
  data() {
    return {
      isRequested: false,
      screenLargerThan: window.matchMedia('(min-width: 768px)')
    }
  },
  methods: {
    showWidget() {
      this.isRequested = !this.isRequested;
    },
    useQuery(evt) {
      return this.screenLargerThan = evt;
    }
  },
  computed: {
    isScreenLargerThan() {
      const query = '(min-width: 768px)';
      useMediaQuery(query, this.useQuery)();
      return this.screenLargerThan.matches;
    }
  },

};
</script>

<style lang="scss" scoped>
.header {
  --bg-header: var(--base-light-color, #fff);
  --bg-header-top: var(--base-dark-color, #333);
  --indent-header: var(--base-unit, 0.6rem);
  --fcolor-header-top: var(--base-light-color, #fff);
  background: var(--bg-header);
}

.header__top {
  padding: var(--indent-header) calc(var(--indent-header) * 2);
  color: var(--fcolor-header-top);
  background: var(--bg-header-top);
}

.header__chat-opener {
  margin-right: calc(var(--indent-header) * 2);
  margin-left: auto;
}

.header__info {
  float: left;
  width: 33%;
}

.header__profile {
  float: left;
  width: 66.66%;
  text-align: right;
}

.header__main {
  padding: var(--indent-header) calc(var(--indent-header) * 2);
}

.header__container {
  &::after {
    display: table;
    clear: both;
    content: '';
  }
}

.header__logo {
  float: left;
  width: 23.33%;
}

.header__nav {
  float: left;
  width: 53.33%;
  text-align: center;
}

.header__shop-cart {
  float: left;
  width: 23.33%;
  text-align: right;
}

@supports (display: flex) {
  .header__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::after {
      all: unset;
    }
  }

  .header__info,
  .header__profile { 
    all: unset;
  }

  .header__logo {
    all: unset;
    order: 2;
    max-width: 8rem;

    @include breakpoint-up(md) {
      order: 1;
    }
  }

  .header__brand {
    display: block;
    max-width: 12rem;
  }

  .header__nav {
    all: unset;
    order: 1;
    margin: 0;

    @include breakpoint-up(md) {
      order: 2;
      margin: 0 auto;
    }
  }

  .header__shop-cart {
    all: unset;
    order: 3;
  }

}

</style>
