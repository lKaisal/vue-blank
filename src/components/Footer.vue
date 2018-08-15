<template lang="pug">
  include ../tools/all

  +b.footer footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.footer
  // 
</style>
