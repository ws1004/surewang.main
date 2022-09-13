<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<template>
  <header text-center m-auto pt-30px pb-30px class="prose header">
    <router-link to="/" title="博客" class="text-20px title">
      SURE WANG
    </router-link>

    <div class="box" pt-15px>
      <router-link to="/blogs" title="博客">
        <div i-carbon:blog />
      </router-link>

      <router-link to="/notes" title="笔记">
        <div i-gg:notes />
      </router-link>

      <router-link to="/links" title="友情链接">
        <div i-cib:amazon />
      </router-link>

      <a href="#" dark:i-carbon-moon i-carbon-sun @click="isDark = !isDark" />

      <a target="_blank" href="https://github.com/ws1004" title="github">
        <div i-uil-github-alt />
      </a>
    </div>
  </header>
</template>

<style scoped lang="less">
.header {
  .title {
    letter-spacing: 5px;
  }
  a {
    padding: 0 5px;
    border-bottom:none
  }

  a:hover {
    border-bottom:none
  }

}
</style>
