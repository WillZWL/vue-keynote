<template>
  <box>
    <img src="../../static/images/logo.png">
    <h2>{ { Vue 分享 } }</h2>
    <aside>
      <router-link :to="'/vue-router'">Vue-router</router-link>
      <router-link :to="'/vuex'">Vuex</router-link>
      <router-link :to="'/Webpack'">Webpack</router-link>
    </aside>
    <aside>
      <router-link :to="'/build-tool'">Vue-cli</router-link>
      <router-link :to="'/yarn'">Yarn</router-link>
      <router-link :to="'/vue-ssr'">Vue SSR</router-link>
      <router-link :to="'/awesome-vue'">Awesome-vue</router-link>
    </aside>
    <p>By 张伟林    (00416624)</p>
  </box>
</template>

<script>
  export default {
    name: 'Home'
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
