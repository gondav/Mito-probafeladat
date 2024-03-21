<script setup lang="ts">
  interface DefaultButtonProps {
    label: string;
    variant: 'default' | 'accent'
    isDisabled?: boolean;
  }

  defineProps<DefaultButtonProps>();
  defineEmits<{(e: 'onClick'): void}>();
</script>

<template>
  <button :class="variant" :disabled="isDisabled" @click.prevent="$emit('onClick')">{{ label }}</button>
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

      &:not(:disabled)hover {
        background-color: lighten($color-secondary, 10%);
      }

      &:not(:disabled)active {
        background-color: darken($color-secondary, 10%);
      }
    }

    &.accent {
      background-color: $color-accent;
      font-weight: 600;

      &:not(:disabled):hover {
        background-color: rgb(215, 77, 165);
      }

      &:not(:disabled):active {
        background-color: rgb(166, 0, 106);
      }
    }

    &:disabled { 
      background-color: $color-light-grey;
      cursor: default; 
    }
  }
</style>