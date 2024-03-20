<script setup lang="ts">
  import Header from '../shared/header/Header.vue';
  import Headline from './headline/Headline.vue';
  import FlightSummary from './flight-summary/FlightSummary.vue';
</script>

<template>
  <Header />
  <div class="container">
    <Headline />
    <FlightSummary />
  </div>
</template>

<style scoped lang="scss">
</style>