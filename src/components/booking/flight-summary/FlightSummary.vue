<script setup lang="ts">
  import DefaultButton from '@/components/shared/button/DefaultButton.vue';
  import IconSeparator from '@/components/icons/IconSeparator.vue';
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
    <IconSeparator />
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
    <section class="summary">
      <span>Total</span>
      <span>$29.98</span>
    </section>
    <DefaultButton label="Pay Now" variant="accent"/>
  </aside>
</template>

<style scoped lang="scss">
  aside {
    max-width: 230px;
    display: grid;
    row-gap: 15px;
    border-top: 1px solid rgba(193, 193, 193, 1);
    background-color: $color-white;
  }

  section {
    display: flex;
    align-items: center;
    padding: 0 15px;

    &.top-summary {
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 14px;
      margin-top: 16px;
      
      p {
        font-weight: bold;

        &:first-child {
          color: $color-font-dark;
        }
      }

      .price {
        color: $color-primary;
      }
    }

    &.summary {
      justify-content: space-between;
      width: 100%;
      height: 50px;
      background-color: $color-primary;
      color: $color-white;
      text-transform: uppercase;
    }

    .date {
      border: 2px solid rgba(225, 225, 225, 1);
      border-radius: 2px;
      text-align: center;
      margin-right: 12px;

      p {
        
        font-weight: 600;
        color: $color-font-dark;

        &.month {
          padding: 5px;
          font-size: 13px;
        }

        &.day {
          padding: 3px;
          font-size: 18px;
        }

        &:first-child {
          background-color: rgba(242, 242, 242, 1);
          text-transform: uppercase;
        }
      }
    }

    .destination {
      h4 {
        font-size: 14px;
        margin-bottom: 6px;
      }

      p {
        font-size: 10px;
      }

      h4, p {
        color: $color-font-dark;
        font-weight: 600;
      }
    }
  }
</style>