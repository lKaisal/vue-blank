<template lang="pug">
  include ../tools/all.pug

  +b.layout
    slot
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import LayoutBase from '@/layouts/LayoutBase.vue'

@Component
export default class LayoutDefault extends LayoutBase {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.layout
  // 
</style>