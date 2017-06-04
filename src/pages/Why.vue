<template>
  <box>
    <v-title legend="Why Vue ?"></v-title>
    <div>
      <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=vue&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=vue&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=vue&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
    </div>
    <v-wrap>
      <ol>
        <li>✨易用
          <p>会基本的HTML, CSS, JavaScript就可以开始</p>
        </li>
        <li>✨灵活
          <p>简单小巧的核心，渐进式技术栈</p>
        </li>
        <li>✨性能
          <p>17kb min+gzip 运行大小,超快虚拟 DOM,最省心的优化</p>
        </li>
        <li>✨生态非常完善
          <p>使用场景广， 为Vue做贡献的人群多</p>
        </li>
      </ol>
    </v-wrap>
  </box>
</template>

<script>
  export default {
    name: 'why'
  }
</script>


<style lang="scss">
  li {
    margin: 1em 0;
  }
  li p {
    font-size: .6em;
  }
  iframe {
    float: left;
  }
</style>