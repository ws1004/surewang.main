<script setup lang="ts">
interface LinkItem {
  name: string
  desc: string
  avatar: string
  link: string
}
defineProps<{
  links: LinkItem[]
}>()

function sortList(list: LinkItem[]) {
  return list.sort((a: any, b: any) => {
    return a.name[0].charCodeAt() - b.name[0].charCodeAt()
  })
}
</script>

<template>
  <a v-for="(item, index) in sortList(links)" :key="index" items-center flex :href="item.link" target="_blank">
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
