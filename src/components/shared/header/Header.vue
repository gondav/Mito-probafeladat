<script setup lang="ts">
  import IconPlus from '@/components/icons/IconPlus.vue';
  import FlightInfo from './FlightInfo.vue';
</script>

<template>
  <header>
    <ul>
      <li>
        <IconPlus />
      </li>
      <li>
        <p class="title">Mito Airline</p>
      </li>
      <li class="flight-info">
        <FlightInfo />
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
  header {
    background-color: $color-primary;
    padding: 10.5px 15px;
    width: 100%;

    ul {
      display: flex;
      align-items: center;
    }
  }

  li {
    list-style-type: none;
  }

  p {
    color: $color-white;

    &.title {
      margin: 0 15px;
      font-size: 17px;
      font-weight: 500;
      line-height: 20px;
      text-transform: uppercase;
    }
  }
  
  .flight-info {
    display: none;
  }
</style>