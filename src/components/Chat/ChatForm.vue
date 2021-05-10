<template>
  <form class="chat__form chat-form">
    <mmag-form-input
      v-model="model.name"
      name="name"
      type="hidden"
    />
    <textarea class="chat-form__field" placeholder="Your message"></textarea>
    <button class="chat-form__btn">
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9428 11L3.49986 18.917L6.54485 11M19.9428 11L3.49986 3.08302L6.54485 11M19.9428 11L6.54485 11" stroke="#51d0db" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </form>
</template>

<script>
import MmagFormInput from '@/components/form/FormInput';

export default {
  name: 'MmagChatForm',
  data() {
    return {
      model: {
        question: ''
      }
    }
  },
  components: {
    MmagFormInput
  }
}
</script>

<style lang="scss" scoped>
  .chat__form {
    --padding-chat-form: var(--base-unit, 0.6rem);
    --fcolor-field-chat-form: #666666;
    padding: 1.2rem 0 0;
  }

  .chat-form {
    font-size: 0;
  }

  .chat-form__btn {
    display: inline-block;
    width: 2.2rem;
    vertical-align: top;
    font-size: unset;
    border: none;
    background: transparent;
  }

  .chat-form__field {
    display: inline-block;
    width: calc(100% - 2.2rem);
    padding: 0 var(--padding-chat-form);
    height: 4rem;
    resize: none;
    vertical-align: top;
    font-size: 0.8rem;
    color: var(--fcolor-field-chat-form);
    background: transparent;
    border: none;
  }

  @supports(display: flex) {
    .chat-form {
      font-size: initial;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
</style>