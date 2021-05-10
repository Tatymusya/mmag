<template>
  <section class="chat__main" v-if="isDefaultScreen">
    <mmag-chat-assistant :is-main-wrapper="true" />
  </section>
  <section v-else style="height: 100%;
    overflow: hidden;">
    <mmag-chat-list />
  </section>
</template>

<script>
import MmagChatAssistant from '@/components/Chat/ChatAssistant';

export default {
  name: 'MmagChatMain',
  components: {
    MmagChatAssistant,
    MmagChatList: () => import(/* webpackPrefetch: true */ '@/components/Chat/ChatMainList')
  },
  props: {
    isDefaultScreen: Boolean,
    isMainWrapper: true
  },
}
</script>

<style lang="scss" scoped>
  .chat__main {
    padding: var(--indent-chat-wrapper);
  }

</style>