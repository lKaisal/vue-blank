<template lang="pug">
  include ../tools/all.pug

  +b.layout
    Navbar
    slot
    Footer
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import LayoutBase from '@/layouts/LayoutBase.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class LayoutDefault extends LayoutBase {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.layout
  // 
</style>