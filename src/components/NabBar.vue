<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<template>
  <header text-center m-auto pt-30px pb-30px class="prose header">
    <a href="/" text-20px class="title"> SURE WANG </a>

    <div class="box" pt-15px>
      <a href="/blogs" title="博客">
        <div i-carbon:blog />
      </a>

      <a href="/notes" title="笔记">
        <div i-gg:notes />
      </a>

      <a target="_blank" href="https://github.com/ws1004" title="github">
        <div i-uil-github-alt />
      </a>

      <a href="#" dark:i-carbon-moon i-carbon-sun @click="isDark = !isDark" />
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
