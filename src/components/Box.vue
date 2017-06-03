<template>
  <article :class="turnOnOrOff">
    <slot></slot>
  </article>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'box',

    computed: {
      ...mapGetters([
          'isHidden'
        ]),
      turnOnOrOff: function() {
        return this.isHidden ? 'off' : 'on'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "scss/share";

  article {
    position: relative;
    padding: 5vh 10%;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $white;
  }
  .on {
    opacity: 0.05
  }
  .off {
    opacity: 1
  }
</style>
