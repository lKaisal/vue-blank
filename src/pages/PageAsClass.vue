<template lang="pug">
  include ../tools/all.pug

  LayoutDefault
    +b.page PageAsClass
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PagePrototype from '@/components/PagePrototype.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

@Component({
  components: {
    LayoutDefault
  }
})
export default class PageAsClass extends Vue {
  private mounted() {
    console.log('PageAsClass mounted')
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.page
  // 
</style>
