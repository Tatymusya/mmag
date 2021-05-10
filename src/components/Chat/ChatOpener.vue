<template>
  <button class="header__chat-opener chat__opener" @click="showChatWidget">Chat</button>
</template>

<script>
export default {
  name: 'MmagChatOpener',
  methods: {
    showChatWidget() {
      this.$emit('show-chat-widget');
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>