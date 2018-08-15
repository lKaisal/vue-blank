<template lang="pug">
  include ./tools/bemto.pug

  +b.app#app(v-cloak)
    Navbar
    router-view(:key="$route.path")
    Footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    LayoutDefault,
    Navbar,
    Footer
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
