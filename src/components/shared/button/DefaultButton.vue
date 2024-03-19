<script setup lang="ts">
  interface DefaultButtonProps {
    label: string
  }

  defineProps<DefaultButtonProps>()
</script>

<template>
  <button>{{ label }}</button>
</template>

<style scoped lang="scss">
  button {
    width: 250px;
    height: 50px;
    border: none;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: $color-secondary;
  }
</style>