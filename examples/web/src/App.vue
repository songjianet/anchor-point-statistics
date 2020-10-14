<template>
  <div id="app">
    ceshi
  </div>
</template>

<script>
import APS from '../../../dist/anchor-point-statistics.es5'

export default {
  name: 'App',
  mounted() {
    const aps = new APS
    aps.browse({id: 1234})
  }
}
</script>

<style>
</style>
