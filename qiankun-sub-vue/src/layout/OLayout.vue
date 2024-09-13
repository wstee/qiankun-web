<template>
  <section class="container">
    <h1 class="title">{{ title }}</h1>
    <main class="main">
      <slot></slot>
    </main>
  </section>
</template>
<script setup lang="ts">
  const title = import.meta.env.VITE_TITLE
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px 7px;
  }
  .title {
    width: 100%;
    height: $headerHeight;
    margin: 0;
    box-sizing: border-box;
    padding-top: 16px;
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    color: #fff;
  }
  .main {
    width: 100%;
    height: calc(100% - $headerHeight);
  }
</style>
