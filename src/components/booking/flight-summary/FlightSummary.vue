<script setup lang="ts">
  import DefaultButton from '@/components/shared/button/DefaultButton.vue';
</script>

<template>
  <aside>
    <section class="top-summary">
      <p>Flights</p>
      <p class="price">$29.98</p>
    </section>
    <section>
      <div class="date">
        <p class="month">Nov</p>
        <p class="day">4</p>
      </div>
      <div class="destination">
         <h4>Budapest - Barcelona El Prat</h4>
         <p>Wed 06:02 - 07:35</p>
      </div>
    </section>
    <section>
      <div class="date">
        <p class="month">Nov</p>
        <p class="day">4</p>
      </div >
      <div class="destination">
         <h4>Barcelona El Prat - Budapest</h4>
         <p>Wed 06:02 - 07:35</p>
      </div>
    </section>
    <DefaultButton label="Total" variant="default" />
    <DefaultButton label="Pay Now" variant="accent"/>
  </aside>
</template>

<style scoped lang="scss">
  aside {
    max-width: 230px;
    display: grid;
    row-gap: 15px;

    section {
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
  }

  section.top-summary {
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 16px;
    
    p {
      font-weight: bold;
    }

    .price {
      color: $color-primary;
    }
  }

  section .date {
    width: 36px;
    border: 2px solid rgba(225, 225, 225, 1);
    border-radius: 2px;
    text-align: center;
    margin-right: 12px;

    p {
      padding: 5px;
    }

    p.month {
      font-size: 13px;
    }

    p.day {
      font-size: 18px;
    }

    p:first-child {
      background-color: rgba(242, 242, 242, 1);
      text-transform: uppercase;
    }
  }

  section .destination {
    h4 {
      font-size: 14px;
    }

    p {
      font-size: 10px;
    }

  }
</style>