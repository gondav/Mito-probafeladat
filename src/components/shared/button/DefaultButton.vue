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
    color: $color-white;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &.default {
      background-color: $color-secondary;

      &:hover {
        background-color: lighten($color-secondary, 10%);
      }

      &:active {
        background-color: darken($color-secondary, 10%);
      }
    }

    &.accent {
      background-color: $color-accent;

      &:hover {
        background-color: rgb(215, 77, 165);
      }

      &:active {
        background-color: rgb(166, 0, 106);
      }
    }

  }
</style>