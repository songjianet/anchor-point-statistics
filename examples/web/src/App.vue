<template>
  <div id="app">
    ceshi
  </div>
</template>

<script>
import { APS } from '../../../dist/anchor-point-statistics.es5'

export default {
  name: 'App',
  mounted() {
    APS({id: 0}, 'web')
  }
}
</script>

<style>
</style>
