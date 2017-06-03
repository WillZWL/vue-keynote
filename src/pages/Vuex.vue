<template>
  <box>
    <v-title legend="What's Vuex?"></v-title>
    <v-wrap>
      <h3>专为 Vue.js 应用程序开发的状态管理模式</h3>
      <ol>
        <li>state，驱动应用的数据源</li>
        <li>view，以声明方式将state映射到视图</li>
        <li>actions，响应在view上的用户输入导致的状态变化</li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'Vuex'
  }
</script>

<style lang="scss" scoped>
  li {
    margin: 1em 0;
  }
</style>

