<template>
  <main class="reveal">
    <router-view></router-view>
    <catalogue-buttom></catalogue-buttom>
    <catalogue></catalogue>
    <nav-bar></nav-bar>
    <controls></controls>
  </main>
</template>

<script>
  import NavBar from 'components/Nav-bar'
  import Controls from 'components/Controls'
  import CatalogueButtom from 'components/Catalogue-button'
  import Catalogue from 'components/Catalogue'
  export default {
    name: 'app',
    components: {
      Controls,
      NavBar,
      Catalogue,
      CatalogueButtom
    }
  }
</script>

<style lang="scss">
  @import "scss/share";

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pages {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    a {
      @include hide-text;
      display: block;
      width: 20px;
      height: 4px;
      background-color: rgba(#200050, .3);
      transition: all $traisit;
      &:hover {
        background-color: rgba(#200050, .5);
      }
      &.active {
        background-color: #41B883;
        height: 6px;
      }
    }
  }
</style>
