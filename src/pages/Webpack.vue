<template>
  <box>
    <v-title legend="What's Webpack?"></v-title>
    <v-wrap>
      <h3>webpack 是一个现代的 JavaScript 应用程序的模块打包器(module bundler)</h3>
      <ol>
        <li>入口(entry)</li>
        <li>输出(output)</li>
        <li>加载器loader</li>
        <li>插件(plugins)</li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'webpack'
  }
</script>

<style lang="scss" scoped>
  li {
    margin: 1em 0;
  }
</style>
