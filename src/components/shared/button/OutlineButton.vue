<script setup lang="ts"></script>

<template>
  <button>$29.99</button>
</template>

<style scoped lang="scss">
  button {
    width: 95px;
    height: 48px;
    background-color: white;
    cursor: pointer;
    color: black;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid $color-accent;
  }

  @media screen and (min-width: 460px) {
    button {
      width: 120px;
    }
  }

  @media screen and (min-width: 800px) {
    button {
      width: 160px;
      font-size: 20px;
    }
  }
</style>