<template>
  <div v-if="isDefaultScreen" class="chat__footer chat-footer">
    <button @click="openChatScreen" class="chat-footer__btn">
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 9C13 9.35362 12.8595 9.69276 12.6095 9.94281C12.3594 10.1929 12.0203 10.3333 11.6667 10.3333H3.66667L1 13V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V9Z" stroke="#33b3bd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      Wtite to the operator
    </button>
    <button class="chat-footer__btn">
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.39056 1.39052C1.14052 1.64057 1.00004 1.97971 1.00004 2.33333V8.33333C1.00004 9.4379 1.89547 10.3333 3.00004 10.3333H3.66671H11.6667C12.0203 10.3333 12.3595 10.1929 12.6095 9.94281C12.8596 9.69276 13 9.35362 13 9V2.33333C13 1.97971 12.8596 1.64057 12.6095 1.39052M1.39056 1.39052C1.64061 1.14048 1.97975 1 2.33337 1H11.6667C12.0203 1 12.3595 1.14048 12.6095 1.39052M1.39056 1.39052L5.65322 5.27326C6.41649 5.9685 7.58351 5.9685 8.34679 5.27327L12.6095 1.39052" stroke="#33b3bd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      Write to the support
    </button>
  </div>
  <div v-else class="chat__footer chat__footer--form">
    <mmag-chat-form />
  </div>
</template>

<script>
export default {
  name: 'MmagChatFooter',
  props: {
    isDefaultScreen: Boolean
  },
  components: {
    MmagChatForm: () => import(/* webpackPrefetch: true */ '@/components/Chat/ChatForm')
  },
  methods: {
    openChatScreen() {
      this.$emit('open-chat-screen');
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat__footer {
    padding: 0 var(--indent-chat-wrapper) var(--indent-chat-wrapper);

    &--form {
      border-top: 1px solid rgba(153, 153, 153, 0.2);
    }
  }
  .chat-footer {
    --brdcolor-chat-btn: var(--base-selection-color, #51d0db);
    --fcolor-chat-btn: #33b3bd;
  }
  .chat-footer__btn {
    display: block;
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    border: 2px solid var(--brdcolor-chat-btn);
    background: #fff;
    border-radius: 0.5rem;
    color: var(--fcolor-chat-btn);

    svg {
      margin-right: 0.4rem;
    }
  }
</style>