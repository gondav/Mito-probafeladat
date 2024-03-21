<script setup lang="ts">
  import DefaultButton from '@/components/shared/button/DefaultButton.vue';
  import IconSeparator from '@/components/icons/IconSeparator.vue';
  import type  { FlightDetails } from '@/interfaces/flight-details';
  import { ref, watch } from 'vue';
  import { getMonth, getDay, formatTime, getDayName } from '@/utilities/date-manipulation';

  interface FlightSummaryProps {
    outbound? : FlightDetails;
    inbound? : FlightDetails;
  }

  const props = defineProps<FlightSummaryProps>();

  const totalPrice = ref(0);

  const calculateTotalPrice = (): number =>{

    if (!props.outbound && !props.inbound) {
      return 0;

    } else if (props.outbound && !props.inbound) {
      return props.outbound.price;

    } else if (!props.outbound && props.inbound) {
      return props.inbound.price;
      
    } else {
      return props.outbound!.price + props.inbound!.price;
    }
  }

  watch([() => props.outbound, () => props.inbound], () => {
    totalPrice.value = calculateTotalPrice();
  }, { immediate: true });



</script>

<template>
  <aside>
    <section class="top-summary">
      <p>Flights</p>
      <p class="price">${{ totalPrice }}</p>
    </section>
    <p v-if="(!outbound && !inbound)" class="default-text">Choose an outbound flight</p>
    <section v-if="outbound">
      <div class="date">
        <p class="month">{{ getMonth(outbound.departureTime) }}</p>
        <p class="day">{{ getDay(outbound.arrivalTime) }}</p>
      </div>
      <div class="destination">
         <h4>{{ outbound.origin }} - {{ outbound.destination }}</h4>
         <p>{{`${getDayName(outbound.departureTime)} ${formatTime(outbound.departureTime)} - ${formatTime(outbound.arrivalTime)}`}}</p>
      </div>
    </section>
    <IconSeparator v-if="!!(outbound && inbound)" />
    <section v-if="inbound">
      <div class="date">
        <p class="month">{{ getMonth(inbound.departureTime) }}</p>
        <p class="day">{{ getDay(inbound.arrivalTime) }}</p>
      </div >
      <div class="destination">
         <h4>{{ inbound.origin }} - {{ inbound.destination }}</h4>
         <p>{{`${getDayName(inbound.departureTime)} ${formatTime(inbound.departureTime)} - ${formatTime(inbound.arrivalTime)}`}}</p>
      </div>
    </section>
    <section class="summary">
      <span>Total</span>
      <span>${{ totalPrice }}</span>
    </section>
    <DefaultButton :is-disabled="!totalPrice" label="Pay Now" variant="accent"/>
  </aside>
</template>

<style scoped lang="scss">
  aside {
    max-width: 230px;
    display: grid;
    row-gap: 15px;
    border-top: 1px solid $color-light-grey;
    background-color: $color-white;

    .default-text {
      margin: 21px 0 21px 15px;
      color: $color-grey;
      font-weight: 600;
      max-width: 186px;
    }
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
      min-width: 230px;
      height: 50px;
      background-color: $color-primary;
      color: $color-white;
      text-transform: uppercase;

      span {
        font-weight: 600;
      }
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