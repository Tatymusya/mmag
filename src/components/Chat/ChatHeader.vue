<template>
  <header class="chat__header">
    <section class="chat__header-screen chat__header-screen--option" v-if="isDefaultScreen">
      <span class="chat__header-img">
        <img src="../../assets/images/logo/MmaG2_logo.svg" alt="" />
      </span>
      <h3 class="chat__header-heading">Online Assistant</h3>
      <button class="chat__header-close">
        <img src="../../assets/images/icons/close.svg" alt="" />
      </button>
    </section>
    <section class="chat__header-screen chat__header-screen--dialog" v-else>
      <button @click="backToOptionScreen" class="chat__header-back">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path></svg>
      </button>
      <span class="chat__header-img">
        <img src="../../assets/images/chat/assistant_sm.png" width="30" alt="" />
        <span>Anastasia</span>
      </span>
      <button class="chat__header-close">
        <img src="../../assets/images/icons/close.svg" alt="" />
      </button>
    </section>
  </header>
</template>

<script>
export default {
  name: 'MmagChatHeader',
  props: {
    isDefaultScreen: Boolean
  },
  methods: {
    backToOptionScreen() {
      this.$emit('back-to-option-screen');
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat__header {
    --bgcolor-chat-header: var(--base-selection-color, #51d0db);
    --indent-chat-header: var(--base-indent, 1.2rem);


    max-height: 64px;
    padding: var(--indent-chat-header);
    color: var(--light-color-chat-wrapper);
    background: var(--bgcolor-chat-header);
    border-top-right-radius: 0.8rem 0.9rem;
    border-top-left-radius: 0.8rem 0.9rem;
  }

  .chat__header-screen {
    max-width: 18rem;
    text-align: center;
    font-size: 0;

    &:before {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      content: '';
    }
  }

  .chat__header-img,
  .chat__header-heading,
  .chat__header-close,
  .chat__header-back {
    display: inline-block;
    vertical-align: middle;
  }

  .chat__header-img {
    width: 27.4%;
    font-size: initial;

    img {
      max-width: 3.4rem;
      // border-radius: 50%;
    }
  }

  .chat__header-heading {
    width: 50%;
    font-size: initial;
    font-size: 1rem;
  }

  .chat__header-close {
    width: 22.6%;
    font-size: initial;
    background: transparent;
    border: none;

    img {
      max-width: 1rem;
      margin-left: auto;
    }
  }

  .chat__header-back {
    width: 10%;
    font-size: initial;
    background: transparent;
    border: none;
    margin-right: 1.2rem;
  }

  .chat__header-screen--option {
    .chat__header-img {
      width: 27.4%;
      font-size: initial;

      img {
        max-width: 3.4rem;
        // border-radius: 50%;
      }
    }
  }

  .chat__header-screen--dialog {
    .chat__header-img {
      width: 60%;
      text-align: left;
      font-size: initial;

      img {
        display: inline-block;
        max-width: 2rem;
        margin-right: 0.4rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
  }

  @supports(display: sgrid) {
    .chat__header-screen {
      text-align: initial;
      font-size: initial;
      display: grid;
      align-items: center;
      width: 100%;

      &--option {
        grid-template-columns: 1.2fr 1.8fr 1fr;
      }

      &:before {
        display: initial;
        content: initial;
        height: initial;
      }
    }

    .chat__header-img {
      width: auto;
    }

    .chat__header-heading {
      width: auto;
    }

    .chat__header-close {
      width: auto;
      justify-self: end;
    }
  }
</style>