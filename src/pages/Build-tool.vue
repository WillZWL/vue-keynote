<template>
  <box>
    <v-title legend="VUE-CLI"></v-title>
    <v-wrap>
      <h3>vue.js的脚手架，自动生成vue.js模板工程</h3>

      <pre>npm install --global vue-cli</pre>

      <pre>vue init webpack &lt;project-name&gt;</pre>

      <pre>vue list</pre>

      <ol>
        <li>browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.</li>
        <li>browserify-simple - A simple Browserify + vueify setup for quick prototyping.</li>
        <li>pwa - PWA template for vue-cli based on the webpack template</li>
        <li>simple - The simplest possible Vue setup in a single HTML file</li>
        <li>webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.</li>
        <li>webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.</li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'Build-tool'
  }
</script>

<style lang="scss" scoped>
  li {
    font-size: .5em;
    margin: 1em 0;
  }
  pre {
    padding:.5em;
    background: #3f3f3f;
    margin: .5em auto;
  }
</style>
