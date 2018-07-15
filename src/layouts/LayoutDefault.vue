<template lang="pug">
  include ../tools/all.pug

  +b.page
    slot
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'LayoutDefault'
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="stylus">
@import '../styles/tools'

.page
  // 
</style>