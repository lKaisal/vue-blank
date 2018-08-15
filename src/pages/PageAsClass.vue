<template lang="pug">
  include ../tools/all.pug

  +b.page PageAsClass
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PageBase from '@/pages/PageBase.vue'

@Component
export default class PageAsClass extends PageBase {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
