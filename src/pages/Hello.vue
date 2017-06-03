<template>
  <box>
    <img src="../../static/images/logo.png">
    <h2>{ { Vue 分享 } }</h2>
    <aside>
      <a href="#" target="_blank">vue-router</a>
      <a href="#" target="_blank">vuex</a>
      <a href="#" target="_blank">Webpack</a>
    </aside>
    <aside>
      <a href="#" target="_blank">vue-cli</a>
      <a href="#" target="_blank">vuex</a>
      <a href="#" target="_blank">vue-resouces</a>
      <a href="#" target="_blank">Vue SSR</a>
    </aside>
    <p>By 张伟林    (00416624)</p>
  </box>
</template>

<script>
  export default {
    name: 'hello'
  }
</script>

<style lang="scss" scoped>
  @import "scss/share";

  h1 {
    font-size:4em;
    margin-top:0.5em;
    margin-bottom: 0;
  }

  p {
    margin-top:1.6em;
    color: rgba($white, .3);
  }

  a {
    margin-left: .5em;
    color: #fff;
    transition: all .6s;
    text-decoration: none;
    &:hover {
      color: rgba($white, .8);
    }
    &:before {
      content: '✨';
      //margin-right: .6em;
      //color: rgba($white, .8);
    }
  }

  aside {
    margin-top: 1.6em;
  }
</style>
