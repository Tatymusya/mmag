<script>
  export default {
    functional: true,
    name: 'MmagContainerLimiter',
    render(createElement, context) {
      const setClasses = () => {
        if(!context.props.classes) {
          return `limiter`;
        }

        if(typeof context.props.classes === 'string') {
          return `limiter ${context.props.classes}`;
        }

        return `limiter ${context.props.classes.join(' ')}`;
      }

      const containerLimiter = createElement('div', {
        class: setClasses(),
      }, context.children, context.data);

      return containerLimiter;
    },
    props: {
      classes: [String, Array]
    }
  };
</script>

<style lang="scss">
  .limiter { 
    --max-width-limiter: var(--max-width-layout, 1600px);
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;

    @include breakpoint-up(md) {
      max-width: 88%;
    }

    @include breakpoint-up(3xl) {
      max-width: var(--max-width-limiter);
    }
  }
</style>