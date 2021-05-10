<template>
  <input
    :type="type"
    :name="value"
    :placeholder="placeholder"
    @change="$emit('input', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', ($event.target.value = ''))"
    @blur="$emit('blur')"
  />
</template>

<script>
export default {
  name: 'MmagFormInput',
  props: {
    value: {
      type: String,
      default: '',
      require: true,
    },
    placeholder: {
      type: String,
      default: '',
      require: true,
    },
    type: {
      type: String,
      default: 'text',
      require: false,
    },
  },
};
</script>
