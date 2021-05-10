<script>
export default {
  functional: true,
  name: 'MmagLoader',

  render(createElement, context) {
    const { width, height } = context.props.size;

    console.log(createElement);
    return createElement('div',
      {
        attrs: {
          class: 'loader',
        },
        style: {
          '--loader-width': `${width}rem`,
          '--loader-height': `${height}rem`
        },
      },
    );
  },
  props: {
    size: {
      type: Object, 
      require: false,
      default: () => ({
        width: 1,
        height: 1,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader {
    --loader-width: 1rem;
    --loader-height: 1rem;

    width: var(--loader-width);
    height: var(--loader-height);
    background: url(@/assets/images/loaders/loader.svg) no-repeat 50% 50%;
    background-size: contain;
  }
</style>