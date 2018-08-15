<template lang="pug">
  include ../tools/all.pug

  +b.page PageAsObject
</template>

<script>
import PageBase from '@/pages/PageBase'

export default {
  name: 'PageAsObject',
  extends: PageBase,
}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
