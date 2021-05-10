<template>
  <div>
    <li class="chat-list__item chat-list__item--questioner">
    <time class="chat-list__date">12.12.21</time>
    <span class="chat-list__text">Text gdgggd shh dhhdh shhhh d ddferghgh <br>shh dhhdh shhhh d ddferghgh</span>
  </li>
  <li class="chat-list__item chat-list__item--assistant">
    <time class="chat-list__date">12.12.21</time>
    <span class="chat-list__text">Text gdgggd shh dhhdh shhhh d ddferghgh <br>shh dhhdh shhhh d ddferghgh</span>
  </li>
  </div>
</template>

<script>
export default {
  name: 'MmagChatListItem',
  props: {
    isAssistant: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .chat-list__item {
    min-height: 6rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  .chat-list__text {
    display: block;
    max-width: 80%;
    padding: 0.8rem;
    font-size: 0.8rem;
  }

  .chat-list__date {
    display: inline-block;
    padding-bottom: 0.2rem;
    color: #959e9d;
  }

  .chat-list__item--questioner {
    text-align: right;
    .chat-list__text {
      margin-left: auto;
      text-align: left;
      color: #696969;
      background: #f3f3f3;
      border-radius: 0.8rem 0 0.8rem 0.8rem;
    }
    .chat-list__date {
      margin-left: auto;
    }
  }

  .chat-list__item--assistant {
    .chat-list__text {
      margin-right: auto;
      color: #68bac1;
      border: 2px solid #51d0db;
      border-radius: 0 0.8rem 0.8rem 0.8rem;
    }
  }

  @supports(scroll-snap-type: y) {
    .chat-list__item {
      scroll-snap-align: start;
    }
  }

</style>