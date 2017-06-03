<template>
  <box>
    <img src="../../static/images/logo.png">
    <v-title legend="THANKS"></v-title>
    <router-link :to="{name: 'Hello'}">Back Home</router-link>
  </box>
</template>

<script>
  export default {
    name: 'bye'
  }
</script>

<style lang="scss" scoped>
  @import 'scss/share';

  a {
    color: rgba($white, .6);
    text-decoration: none;
  }
</style>
