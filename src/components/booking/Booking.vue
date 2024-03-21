<script setup lang="ts">
  import Header from '../shared/header/Header.vue';
  import Headline from './headline/Headline.vue';
  import FlightSummary from './flight-summary/FlightSummary.vue';
  import InOutBound from './in-out-bound/InOutBound.vue';
  import type  { FlightDetails } from '@/interfaces/flight-details';

  const outboundFlight: FlightDetails = {
  flightNumber: 'ABC123',
  origin: 'New York',
  destination: 'Los Angeles',
  departureTime: new Date('2024-03-25T08:00:00'),
  arrivalTime: new Date('2024-03-25T10:30:00'),
  isOutbound: true,
  price: 250
};

  const inboundFlight: FlightDetails = {
    flightNumber: 'XYZ456',
    origin: 'Los Angeles',
    destination: 'New York',
    departureTime: new Date('2024-04-01T11:00:00'),
    arrivalTime: new Date('2024-04-01T13:30:00'),
    isOutbound: false,
    price: 200
  };
</script>

<template>
  <Header />
  <div class="booking-container">
    <div class="booking-wrapper">
      <div class="summary">
        <FlightSummary :outbound="outboundFlight" :inbound="inboundFlight" />
      </div>
      <div class="flight-select">
        <div class="headline">
          <Headline />
        </div>
        <InOutBound />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .booking-wrapper {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .summary {
    display: flex;
    justify-content: center;
  }

  .headline {
    margin: 42px 0;
  }

  @media screen and (min-width: 1024px) {
    .booking-wrapper {
      display: flex;
      align-items: flex-start;
    }

    .summary {
        margin: 130px 21px 0 0;
    }
  }

</style>