<template lang="pug">
  include ../tools/all

  +b.navbar
    +e.heading navbar
    +e.ROUTER-LINK.link(to="/" tag="div") home
    +e.ROUTER-LINK.link(to="/test" tag="div") test
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
