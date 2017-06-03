<template>
  <box>
    <v-wrap>
      <h3>“单向数据流”</h3>
      <div>
        <img src="../../static/images/flow.png">
      </div>
      <div>
        <p>当我们的应用遇到多个组件共享状态时，<br>单向数据流的简洁性很容易被破坏</p>
        <ul>
          <li>多个视图依赖于同一状态。</li>
          <li>来自不同视图的行为需要变更同一状态。</li>
        </ul>
      </div>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'One-way-data-flow'
  }
</script>

<style lang="scss" scoped>
  img {
    width: 400px;
  }
  li {
    font-size:.7em;
    margin: 1em 0;
  }
</style>
