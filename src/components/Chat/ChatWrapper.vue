<template>
  <div class="chat">
    <mmag-chat-header  @back-to-option-screen="changeScreen" :is-default-screen="defaultStep" />
    <mmag-chat-main :is-default-screen="defaultStep"/>
    <mmag-chat-footer :is-default-screen="defaultStep" @open-chat-screen="changeScreen" />
  </div>
</template>

<script>
import MmagChatHeader from '@/components/Chat/ChatHeader';
import MmagChatMain from '@/components/Chat/ChatMain';
import MmagChatFooter from '@/components/Chat/ChatFooter';

export default {
  name: 'MmagChatWrapper',
  components: {
    MmagChatHeader,
    MmagChatMain,
    MmagChatFooter
  },
  data() {
    return {
      defaultStep: true
    }
  },
  methods: {
    changeScreen() {
      this.defaultStep = !this.defaultStep;
      return;
    }
  },
}
</script>

<style lang="scss" scoped>
  .chat {
    --light-color-chat-wrapper: var(--base-light-color, #fff);
    --shadowcolor-chat-wrapper: var(--base-dark-color-rgba);
    --indent-chat-wrapper: var(--base-indent, 1.2rem);

    position: absolute;
    right: 0;
    width: 19rem;
    height: 75vh;

    contain: layout;
    border-radius: 0.8rem 0.9rem;
    box-shadow: 0 0 1rem rgb(0 0 0 / 20%);
  }

  @supports(display:grid) {
    .chat {
      display: grid;
      grid-template-rows: 64px 2.2fr 1fr;
    }
  }
  
</style>