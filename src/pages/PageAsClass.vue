<template lang="pug">
  include ../tools/all.pug

  +b.COMPONENT.page(is="LayoutSidebar")
    +e.sidebar(slot="sidebar") PageAsClass sidebar
    +e.sidebar(slot="main") PageAsClass main
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PageBase from '@/pages/PageBase.vue'
import LayoutSidebar from '@/layouts/LayoutSidebar.vue'

@Component({
  components: {
    LayoutSidebar
  }
})
export default class PageAsClass extends PageBase {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
