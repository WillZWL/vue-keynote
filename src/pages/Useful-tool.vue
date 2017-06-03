<template>
  <box>
    <v-title legend="Useful Tool"></v-title>
    <v-wrap>
      <h3>非常有用的工具</h3>
      <ol>
        <li>Vue-cli</li>
        <li>Vue-devtools</li>
        <li>Vue Syntax Highlight</li>
        <li>Webpack</li>
        <li>Webpack-visualizer - <span>https://chrisbateman.github.io/webpack-visualizer</span></li>
        <li>Webpack analyse - <span>http://webpack.github.io/analyse/</span></li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'Useful-tool'
  }
</script>

<style lang="scss" scoped>
  li {
    margin: 1em 0;
  }
  li span {
    font-size: .5em;
  }
</style>

