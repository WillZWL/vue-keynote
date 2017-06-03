<template>
	<nav class="pages">
    <template v-for="name in pages">
      <router-link :to="{name}" :style="{width: 100 / totalPage+ '%'}" :title="name">{{ name }}</router-link>
    </template>
  </nav>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters([
					'pages',
					'totalPage'
				])
		}
	}
</script>