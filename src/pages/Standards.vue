<template>
  <box>
    <v-title legend="Standards"></v-title>
    <v-wrap>
      <ol>
        <li>基于模块开发</li>
        <li>Vue组件命名, 语义化</li>
        <li>组件表达式简单化</li>
        <li>组件 props 原子化, 验证组件的 props</li>
        <li>项目结构化</li>
        <li>避免 this.$parent</li>
        <li>谨慎使用 this.$refs</li>
        <li>使用Eslint对编码风格进行规范</li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'Standards'
  }
</script>
<style lang="scss" scoped>
  li {
    margin: .5em 0;
  }
</style>