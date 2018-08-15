<template lang="pug">
  include ../tools/all

  +b.navbar navbar
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.navbar
  // 
</style>
