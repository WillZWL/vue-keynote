<template>
  <aside class="controls" style="display: block;">
    <a v-on:click="setHidden"><img src="../../static/images/logo.png"></a>
  </aside>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions([
          'setHidden'
        ])
    }
  }
</script>

<style lang="scss" scoped>
  .controls {
    height: 45px;
    left: -25px;
    z-index: 31;
  }
</style>