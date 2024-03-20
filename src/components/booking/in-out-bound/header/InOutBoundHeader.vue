<script setup lang="ts">
  import IconArrowRight from '@/components/icons/IconArrowRight.vue';
  // import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
</script>

<template>
  <section>
    <h3>Outbound</h3>
    <div class="locations">
      <h4>Budapest</h4>
      <IconArrowRight color="primary" />
      <!-- <IconArrowLeft color="primary" /> -->
      <h4>Barcelona El Prat</h4>
    </div>

  </section>
</template>

<style scoped lang="scss">
  section {
    background-color: rgba(242, 242, 242, 1);
    padding: 18px 20px;
    display: flex;
    flex-direction: column;

    h3 {
      text-transform: uppercase;
      font-size: 18px;
      margin-bottom: 18px;
      color: rgba(145, 145, 145, 1);
    }

    .locations {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 500px;
    }

    h4 {
      color: $color-primary;
      font-weight: 700;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 800px) {
    section {
      flex-direction: row;
      align-items: center;

      h3 {
        margin-bottom: 0;
        margin-right: 46px;
      }

      h4 {
        font-size: 22px;
      }
    }
  }
</style>