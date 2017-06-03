<template>
  <box>
    <img src="../../static/images/awesome-vue.png">
    <v-title legend="Awesome Vue"></v-title>
    <br/>
    <div>
      <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=awesome-vue&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=awesome-vue&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=awesome-vue&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
    </div>
  </box>
</template>

<script>
  export default {
    name: 'bye'
  }
</script>

<style lang="scss" scoped>
  @import 'scss/share';
  iframe {
    float: left;
  }
  img {
    width: 400px;
  }
  a {
    color: rgba($white, .6);
    text-decoration: none;
  }
</style>
