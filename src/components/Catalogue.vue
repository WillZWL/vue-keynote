<template>
  <aside class="catalogue" :class="turnOnOrOff">
    <p>目录</p>
    <ol>
      <li v-for="name in pages">
        <router-link :to="{name}" :title="name" @click.native="setHidden">{{ name }}</router-link>
      </li>
    </ol>
  </aside>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
          'isHidden',
          'pages'
        ]),
      turnOnOrOff: function() {
        return this.isHidden ? 'off' : 'on'
      }
    },
    methods: {
      ...mapActions([
          'setHidden'
        ])
    }
  }
</script>

<style lang="scss" scoped>
  .reveal a {
    color:#41B883
  }
  .catalogue {
    position: fixed;
    width: 780px;
    height: auto;
    z-index: 30;
    -webkit-user-select: none;
  }
  .on {
    display: block;
  }
  .off {
    display: none;
  }
</style>