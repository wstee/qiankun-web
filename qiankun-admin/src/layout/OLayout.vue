<template>
  <section class="container">
    <el-container>
        <el-header class="header">
          <h1>{{ title }}</h1>
        </el-header>
      <el-container>
      <el-aside class="left">
        <el-menu @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <router-link to="/">Home</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/app/app-vue3">app-vue3</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/app/app-react18">app-react18</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/app/app-react18-vite">app-react18-vite</router-link>
          </el-menu-item>
          <el-sub-menu index="10">
            <template #title>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
      </el-container>
    </el-container>
  </section>
</template>
<script setup lang="ts">
  const title = import.meta.env.VITE_TITLE

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    
  }

  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.left {
  width: 200px;
  color: #fff;
  background: #79bbff;
}
.header {
  color: #fff;
  text-align: center;
  background-color: #409EFF;
}
.footer {
  color: #fff;
  background-color: #409EFF;
}
</style>
