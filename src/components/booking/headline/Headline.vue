<script setup lang="ts">
  import IconPlane from '@/components/icons/IconPlane.vue';
</script>

<template>
  <section>
    <IconPlane class="icon-plane" />
    <h1>Select Flight</h1>
  </section>
</template>

<style scoped lang="scss">
  section {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin-left: 24px;
      color: rgba(10, 0, 139, 1);
      font-size: 30px;
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 800px) {
    section {
      justify-content: flex-start;
    }

    h1 {
      font-size: 40px !important;
    }

    .icon-plane {
      margin-left: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    .icon-plane {
      margin-left: 0;
    }
  }
</style>