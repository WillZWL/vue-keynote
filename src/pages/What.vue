<template>
  <box>
    <v-title legend="What's Vue?"></v-title>
    <v-wrap>
      <h3>Vue.js是一套构建用户界面的 渐进式框架</h3>
      <p>MVVM (Model-View-ViewModel)架构 </p>
      <ol>
        <li>自底向上增量开发的设计</li>
        <li>核心库只关注视图层, 易于整合</li>
        <li>单文件组件和库结合使用时，为构建复杂的单页应用程序提供驱动</li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'what'
  }
</script>

<style lang="scss" scoped>
  li {
    margin: 1em 0;
  }
</style>

