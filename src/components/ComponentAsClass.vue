<template lang="pug">
  include ../tools/all

  +b.example
    +e.container {{ message }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ComponentAsClass extends Vue {
  private message: string = 'ComponentAsClass message'
}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.example
  // 
</style>
