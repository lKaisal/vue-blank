<template lang="pug">
  include ./tools/bemto.pug

  +b.app#app(v-cloak)
    LayoutDefault
      router-view(:key="$route.path")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

@Component({
  components: {
    LayoutDefault
  }
})
export default class App extends Vue {
  created() {
    window.addEventListener('resize', () => this.$store.commit('ui/calculateWindowWidth'))
  }
}
</script>

<style lang="stylus">
@import './styles/app'
@import './styles/tools'

.app
  // 
</style>
