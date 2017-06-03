<template>
  <box>
    <v-title legend="Example"></v-title>
    <v-wrap>
      <pre>
    &lt;div id="app"&gt;
      &lt;p>{&nbsp;{ message }&nbsp;}&lt;/p&gt;   &nbsp;
    &lt;/div&gt;
      </pre>

      <pre>
    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue.js!'
      }
    });
      </pre>
      <p><a href="https://jsfiddle.net/chrisvfritz/50wL7mdz/">Demo Online</a></p>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'example'
  }
</script>

<style lang="scss" scoped>
  pre {
    background: #3f3f3f;
    margin: .5em auto;
  }
</style>

