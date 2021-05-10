<template>
  <section>
    <h1>Welcome to the Forum</h1>
    <div class="chat">
      <section class="chat__screen chat__screen--choice">
        <div class="chat__brand">Logo</div>
        <div class="chat__heading">Online Assistant</div>
        <div class="chat__close">X</div>
        <div class="chat__body">1</div>
        <div class="chat__footer">1</div>
      </section>
    </div>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
    <p>LOrem ipsum dolor</p>
  </section>
</template>

<script>
export default {
  name: 'MmagHome',
  metaInfo: {
    title: 'MmaG - shop of everything in the world and all sorts of nonsense',
    titleTemplate: '%s!',
    htmlAttrs: {
      lang: 'en',
    },
  },
  components: {
    // MmagLink
  },
  beforeCreate() {
    console.log('Nothing gets called before me!');
  },
};
</script>

<style lang="scss" scoped></style>
