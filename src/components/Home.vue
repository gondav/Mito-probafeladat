<script setup lang="ts">
  import Header from './shared/header/Header.vue';
  import FlightsSearch from './forms/FlightsSearch.vue';
</script>

<template>
  <div class="container">
    <section>
      <Header />
      <FlightsSearch />
    </section>
  </div>
</template>

<style scoped lang="scss">
  .container {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: $color-bg;

    section {
      min-width: 320;
      width: 100%;
      max-width: 570px;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 6px 6px 15px 0px rgba(0, 0, 0, 0.1);
    }
  }
</style>