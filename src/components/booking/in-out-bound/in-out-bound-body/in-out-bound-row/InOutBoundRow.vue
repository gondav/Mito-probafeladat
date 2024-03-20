<script setup lang="ts">
  import IconGreyArroRight from '@/components/icons/IconGreyArroRight.vue';
  import OutlineButton from '@/components/shared/button/OutlineButton.vue';
</script>

<template>

  <div class="row">
    <div class="time">
      <p>06:02</p>
      <IconGreyArroRight />
      <p>07:35</p>
    </div>
    <ul class="prices-container">
      <li>
        <OutlineButton />
      </li>
      <li>
        <OutlineButton />
      </li>
      <li>
        <OutlineButton />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .row {
    padding: 0 20px;
    border-top: 1px solid rgba(229, 229, 229, 1);

    p:nth-child(1) {
      margin-right: 8px;
    }

    p:nth-child(3) {
      margin-left: 8px;
    }
  }

  .time {
    width: 106px;
    margin: 18px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
  }

  .prices-container {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
  }

  li {
    list-style-type: none;
  }

  @media screen and (min-width: 800px) {
    .row {
      display: flex;
      align-items: center;

      .time {
        margin: 0 45px 0 0;
      }

      li {
        padding: 42px 17px;

        &:nth-child(2) {
          background-color: rgba(242, 242, 242, 1);
        }
        &:nth-child(3) {
          padding-right: 0
        }
      }

      .prices-container {
        max-width: unset !important;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
</style>