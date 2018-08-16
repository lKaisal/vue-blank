<template lang="pug">
  include ../tools/all.pug

  +b.COMPONENT.page(is="LayoutDefault")
    +e.container 404
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import PageBase from '@/pages/PageBase.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

@Component({
  components: {
    LayoutDefault
  }
})
export default class PageAsClass extends PageBase {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
