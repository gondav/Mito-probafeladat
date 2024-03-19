<script setup lang="ts">
  import IconPlane from '@/components/icons/IconPlane.vue';
</script>

<template>
  <section>
    <IconPlane />
    <h1>Select Flight</h1>
  </section>
</template>

<style scoped lang="scss">
  section {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 24px;
      color: rgba(10, 0, 139, 1);
      font-size: 40px;
      font-weight: 300;
      text-transform: uppercase;
    }
  }
</style>