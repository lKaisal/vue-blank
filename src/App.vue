<template lang="pug">
  include ./tools/bemto.pug

  +b.app#app(v-cloak)
    router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private beforeMount() {
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
