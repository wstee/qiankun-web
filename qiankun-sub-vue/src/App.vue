<script setup lang="ts">
import OLayout from './layout/OLayout.vue';
</script>

<template>
  <div class="container">
    <OLayout>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
      </router-view>
    </OLayout>
  </div>
</template>
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
