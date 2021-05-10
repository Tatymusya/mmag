<template>
  <section class="chat-main__wrapper">
    <ul class="chat-main__list chat-list">
      <mmag-chat-list-item />
    </ul>
  </section>
</template>

<script>
import MmagChatListItem from '@/components/Chat/ChatMainListItem';

export default {
  name: 'MmagChatList',
  components: {
    MmagChatListItem
  }
}
</script>

<style lang="scss" scoped>
  .chat-main__wrapper {
    height: 100%;
    overflow-y: auto;
  }

  .chat-main__list {
    padding: 1.2rem;
    margin: 0;
    list-style: none;
  }

  @supports(scroll-snap-type: y) {
    .chat-main__wrapper {
      scroll-snap-type: y;
    }
  }

</style>
