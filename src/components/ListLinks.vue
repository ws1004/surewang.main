<script setup lang="ts">
const list = [
  {
    name: 'Dimple\'s blog',
    desc: '人浮于世，蹒跚而行',
    avatar: 'https://dimples-yanjie.oss-cn-beijing.aliyuncs.com/blog/img/QQ%E5%9B%BE%E7%89%8720201025032558.jpg',
    link: 'https://dimples.top',
  },
]
</script>

<template>
  <a v-for="(item, index) in list" :key="index" items-center flex :href="item.link" target="_blank">
    <img inline-block h-60px :src="item.avatar" alt="">
    <span ml-20px> {{ item.name }}</span>
    <span ml-10px mr-10px>-</span>
    <span> {{ item.desc }}</span>
  </a>
</template>

<style scoped lang="less">
img {
  width: 60px !important;
  margin: 0 !important;
  padding: 5px !important;
}
</style>
