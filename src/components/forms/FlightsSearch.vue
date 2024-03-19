<script setup lang="ts">
  import DefaultButton from '../shared/button/DefaultButton.vue';
</script>

<template>
  <form>
    <div class="input-container">
      <section class="wrapper location-container">
        <input
          type="text"
          class="location"
          placeholder="Origin"
        />
        <input
          type="text"
          class="location"
          placeholder="Destination"
        />
      </section>
      <section class="wrapper date-picker-container">
        <input
          type="date"
          class="location"
        />
        <input
          type="date"
          class="location"
        />
      </section>
      <DefaultButton label="Search" />
    </div>
  </form>
</template>

<style scoped lang="scss">
  form {
    padding: 25px 40px 25px 25px;

    .input-container {
      display: grid;
      place-items: center;
      row-gap: 20px;
    }
  }

  .wrapper {
    display: grid;
    row-gap: 8px;
  }

  .location {
    width: 250px;
    height: 50px;
    padding: 15.5px 15px; 
    font-size: 16px; 
  }

  @media screen and (min-width: 570px) {
    .input-container {
      row-gap: 50px !important;
    }

    .wrapper {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }
  }
</style>