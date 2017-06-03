x<template>
  <aside class="controls" style="display: block;">
    <button class="navigate-left" :class='isEnabledLeft' v-on:click="onLast" aria-label="previous slide"></button>
    <button class="navigate-right" :class='isEnabledRight' v-on:click="onNext" aria-label="next slide"></button>
    <button class="navigate-up" aria-label="above slide"></button>
    <button class="navigate-down" aria-label="below slide"></button>
  </aside>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters([
        'totalPage',
        'currentPage'
      ]),
    isEnabledLeft: function() {
      if (this.currentPage > 0) {
        return 'enabled'
      }
    },
    isEnabledRight: function() {
      if (this.currentPage < (this.totalPage - 1) ) {
        return 'enabled'
      }
    }
  },
  methods: {
    ...mapActions([
        'onNext',
        'onLast'
      ])
  }
}
</script>
