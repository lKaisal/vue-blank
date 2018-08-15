<template lang="pug">
  include ../tools/all.pug

  +b.layout
    +e.sidebar
      slot(name="sidebar")
    +e.main
      slot(name="main")
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import LayoutBase from '@/layouts/LayoutBase.vue'

@Component
export default class LayoutSidebar extends LayoutBase {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.layout
  // 
</style>