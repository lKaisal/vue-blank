<template lang="pug">
  include ../tools/all.pug

  +b.COMPONENT.page(is="LayoutDefault") PageAsObject
</template>

<script>
import PageBase from '@/pages/PageBase'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
  name: 'PageAsObject',
  extends: PageBase,
  components: {
    LayoutDefault
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
