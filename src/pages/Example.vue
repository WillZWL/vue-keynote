<template>
  <box>
    <v-title legend="Example"></v-title>
    <v-wrap>
      <pre>
    &lt;div id="app"&gt;
      &lt;p>{&nbsp;{ message }&nbsp;}&lt;/p&gt;   &nbsp;
      &lt;input v-model="message"&gt;
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

