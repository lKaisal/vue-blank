<template lang="pug">
  include ../tools/all.pug

  LayoutDefault
    +b.page PageAsObject
</template>

<script>
import PagePrototype from '@/components/PagePrototype'
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'PageAsObject',
  extends: PagePrototype,
  components: {
    LayoutDefault,
  },
  mounted() {
    console.log('PageAsObject mounted')
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
