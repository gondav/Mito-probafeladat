<script setup lang="ts">
  import IconArrowRight from '@/components/icons/IconArrowRight.vue';
  import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
</script>

<template>
  <div class="wrapper">
    <div class="origin">
      <p class="leaving">Leaving From</p>
      <p>Budapest</p>
    </div>
    <div class="icons">
      <IconArrowRight color="white" />
      <IconArrowLeft color="white" />
    </div>
    <div class="destination">
      <p>Barcelona El Prat</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: flex;

    .icons {
      display: flex;
      flex-direction: column;
      align-self: center;
      margin: 0 40px;
    }
  }
  
  p {
    color: $color-white;

    &.leaving {
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
    }
  }
</style>