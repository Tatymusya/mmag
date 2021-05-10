<script>
export default {
  functional: true,
  name: 'MmagLink',
  render(createElement, context) {
    const colorModes = ['dark', 'primary', 'light'];
    const isExternalLink = () => {
      return typeof context.props.to === 'string' && context.props.to.indexOf('http://') !== -1 || context.props.to.indexOf('https://') !== -1;
    }

    const modifierByColorMode = () => {
      if(typeof context.props.colorModeLink !== 'string' && colorModes.findIndex(context.props.colorModeLink) === '-1') {
        throw new Error('"color-mode-link" must be a string and its value must be one of "[dark, primary, light]"'); 
      }

      return `link--${context.props.colorModeLink}`;
    }

    const classLinkByParent = () => {
      if(!context.props.classParent || context.props.classLink) {
        return `${context.props.classLink} link ${modifierByColorMode()}`;
      }

      if(!context.props.classLink || context.props.classParent) {
        return `${context.props.classParent}__link link  ${modifierByColorMode()}`;
      }

      return `link  ${modifierByColorMode}`;
    }

    const link = createElement('router-link', {
      class: classLinkByParent(),
      attrs: {
        to: context.props.to,
        exact: context.props.exact,
        'exact-active-class': context.props.classLinkExactActive,
        'active-class': context.props.classLinkActive,
        'aria-label': context.props.ariaLabelLink
      },
    }, context.children, context.data);

    const externalLink = createElement('a', {
      class: classLinkByParent(),
      attrs: {
        href: context.props.to,
        target: '_blank',
        rel: 'noopener',
        'aria-label': context.props.ariaLabelLink
      },
    }, context.children, context.data);

    return isExternalLink() ? externalLink : link;
  },
  props: {
    to: {
      default: '/',
      require: true
    }, 
    exact: {
      default: false,
      require: false
    },
    classParent: {
      default: '',
      require: false
    },
    classLink: {
      default: '',
      require: false
    },
    classLinkActive: {
      default: 'link--active',
      require: false
    },
    classLinkExactActive: {
      default: 'link--active',
      require: false
    },
    colorModeLink: {
      default: 'primary',
      require: false
    },
    ariaLabelLink: {
      default: '',
      require: false
    }
  }
};
</script>

<style lang="scss" scoped>
  .link {
    --fcolor-dark-link: var(--base-dark-color, #333);
    --fcolor-light-link: var(--base-light-color, #fff);
    --fcolor-primary-link: var(--base-link-color, #007aff);
    --fcolor-active-link: var(--base-link-accent-color, #0856ab);
    --fcolor-hover-link: var(--base-link-accent-color, #0856ab);
    --bg-focus-link: var(--base-bg-focus, rgba(0, 0, 0, 0.33));

    display: inline-block;
    text-decoration: none;
    transition: color 0.4s ease;

    &:focus {
      background: var(--bg-focus-link);
    }

    &:focus:not(:focus-visible) {
      background: transparent;
    }

    &:focus-visible {
      background: var(--bg-focus-link);
    }

    @media (hover: hover) {
      &:hover {
        color: var(--fcolor-hover-link);
      }
    }

    &--dark {
      color: var(--fcolor-dark-link);
    }

    &--light {
      color: var(--fcolor-light-link);
    }

    &--primary {
      color: var(--fcolor-primary-link);
    }

    &--active,
    &:active {
      color: var(--fcolor-active-link);
    }

  }
</style>