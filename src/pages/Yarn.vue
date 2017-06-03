<template>
  <box>
    <v-title legend="What's Yarn?"></v-title>
    <v-wrap>
      <h3>取代npm的包管理工具</h3>
      <pre>npm install --g yarn</pre>
      
      <pre>yarn install</pre>
      <pre>yarn add</pre>
      <pre>yarn global add</pre>
      <pre>yarn remove</pre>
      <pre>yarn upgrade</pre>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'yarn'
  }
</script>

<style lang="scss" scoped>
  li {
    margin: 1em 0;
  }
  pre {
    padding:.5em;
    background: #3f3f3f;
    margin: .5em auto;
  }
</style>