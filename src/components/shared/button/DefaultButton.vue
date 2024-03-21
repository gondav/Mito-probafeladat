<script setup lang="ts">
  interface DefaultButtonProps {
    label: string;
    variant: 'default' | 'accent'
  }

  defineProps<DefaultButtonProps>();
  defineEmits<{(e: 'onClick'): void}>();
</script>

<template>
  <button :class="variant" @click.prevent="$emit('onClick')">{{ label }}</button>
</template>

<style scoped lang="scss">
  button {
    max-width: 250px;
    width: 100%;
    height: 50px;
    border: none;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;

    &.default {
      background-color: $color-secondary;
    }

    &.accent {
      background-color: $color-accent;
    }

  }
</style>