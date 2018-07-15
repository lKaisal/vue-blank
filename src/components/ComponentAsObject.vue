<template lang="pug">
  include ../tools/all

  +b.example
    +e.container {{ message }}
</template>

<script>
export default {
  name: 'ComponentAsObject',
  data() {
    return {
      message: 'ComponentAsObject message'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/tools'

.example
  // 
</style>
