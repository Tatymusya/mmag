<template>
  <div class="chat__assistant chat-assistant">
    <span class="chat-assistant__ava">
      <img class="chat-assistant__photo" src="../../assets/images/chat/assistant_sm.png" alt="" />
      <span class="chat-assistant__status-icon chat-assistant__status-icon--on"></span>
    </span>
    <div class="chat-assistant__name">Anastasia</div>
    <div class="chat-assistant__status-text">Now Online</div>
  </div>
</template>

<script>
export default {
  name: 'MmagChatAssistant',
  props: {
    isOnline: Boolean
  },
}
</script>

<style lang="scss" scoped>
  .chat-assistant {
    --bgcolor-status-on: var(--base-on-success-color, #78b542);
    --bgcolor-status-off: var(--base-gray-color, #999999);
    --fcolor-status-text: var(--base-gray-color, #999999);
    --fcolor-name: var(--base-dark-color, #333333);
    --brdcolor-status: var(--base-light-color, #ffffff);

    text-align: center;
  }

  .chat-assistant__ava {
    display: inline-block;
    position: relative;
    border-radius: 50%;
  }

  .chat-assistant__photo {
    display: inline-block;
    border-radius: 50%;
  }

  .chat-assistant__status-icon {
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    right: 0.1rem;
    top: 3.1rem;
    content: '';
    border: 2px solid var(--brdcolor-status);
    border-radius: 50%;

    &--on {
      background: var(--bgcolor-status-on);
    }
  }

  .chat-assistant__name {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--fcolor-name);
  }

  .chat-assistant__status-text {
    position: relative;
    top: -2px;
    font-size: 0.8rem;
    color: var(--fcolor-status-text);
  }

  @supports(display: grid) {
    .chat-assistant {
      text-align: initial;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-rows: 4rem 1.6rem 1.25rem;
    }

    .chat-assistant__ava,
    .chat-assistant__name,
    .chat-assistant__status-text {
      margin: 0 auto;
    }
  }
</style>