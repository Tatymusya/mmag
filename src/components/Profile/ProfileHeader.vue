<template>
  <div class="header__profile profile">
    <mmag-link 
      :to="'profile'" 
      :class-parent="'profile'"
      :aria-label-link="'Link to the authorization form'"
      :color-mode-link="'light'"
    > 
      SignIn 
    </mmag-link>
    <span aria-hidden="true">|</span>
    <mmag-link 
      :to="'signup'" 
      :class-parent="'profile'" 
      :aria-label-link="'Link to the registration form'"
      :color-mode-link="'light'"
    > 
      SignUp 
    </mmag-link>
  </div>
</template>

<script>
import MmagLink from '@/components/Link/Link';

export default {
  name: 'MmagProfileHeader',
  components: {
    MmagLink,
  },
};
</script>

<style lang="scss" scoped>
.profile {
  --gap-profile-link: var(--base-unit, 0.6rem);
  display: flex;
}

.profile__link:not(:last-child) {
  margin: 0 var(--gap-profile-link);
}

.profile__link:last-child {
  margin: 0 0 0 var(--gap-profile-link);
}
</style>
