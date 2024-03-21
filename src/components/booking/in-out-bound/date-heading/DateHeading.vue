<script setup ts="lang">
  import IconLeftArrowChevron from '@/components/icons/IconLeftArrowChevron.vue';
  import IconRightArrowChevron from '@/components/icons/IconRightArrowChevron.vue';
</script>

<template>
  <section>
    <div class="heading-top">
      <h4>Saturday, 3 November 2015</h4>
    </div>
    <div class="wrapper">
      <div class="heading-left">
        <IconLeftArrowChevron />
        <p>wed 7 october</p>
      </div>
      <div class="heading-center">
        <h4>Saturday, 3 November 2015</h4>
      </div>
      <div class="heading-right">
        <p>sat 10 october</p>
        <IconRightArrowChevron />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .heading-center {
    display: none;
  }

  section {
    padding: 18px 20px;
    background-color: white;

    .wrapper, .heading-left, .heading-right {
      display: flex;
    }

    .heading-left, .heading-right {
      cursor: pointer;
      align-items: center;
    }

    .wrapper {
      justify-content: space-between;
    }

    .wrapper p {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 600;
      color: rgba(145, 145, 145, 1);
    }

    .heading-left p {
      margin-left: 6px;
      
    }

    .heading-right p {
      margin-right: 6px;
    }

    h4 {
      color: rgba(52, 52, 52, 1);
      font-size: 18px;
      margin-bottom: 18px;
    }
  }

  @media screen and (min-width: 800px) {
    .heading-top {
      display: none;
    }

    .heading-center {
      display: block;
    }

    .wrapper {
      width: 100%;
      max-width: unset !important;
    }

    h4 {
      margin-bottom: 0px !important;
    }
  }
</style>