<script setup lang="ts">
import router from 'pages-generated'
import { formatData } from '@/utils'

const pathBase = '/blogs/'
const blogs = router.filter(item => item.path.match(pathBase)).map((item) => {
  const { path, meta } = item

  return {
    path,
    date: formatData(meta?.frontmatter.date),
    year: formatData(meta?.frontmatter.date, 'YYYY'),
    title: meta?.frontmatter.title,
    description: meta?.frontmatter.description,
    tag: meta?.frontmatter.tag || [],
  }
}).sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date))

function isFirstDate(blog: any, blogs: any[]) {
  const { year, path } = blog
  const filterList = blogs.filter(item => item.year === year)

  if (filterList.length === 1)
    return true

  return filterList[0].path === path
}
</script>

<template>
  <template v-for="(blog, index) in blogs" :key="index">
    <div mb-20px>
      <div v-if="isFirstDate(blog, blogs)" relative h="50px" pointer-events-none>
        <span text-100px top="-40px" absolute op10>
          {{ blog.year }}
        </span>
      </div>

      <a :href="blog.path" relative>
        <div text-25px>{{ blog.title }}</div>
        <div text-13px>
          <span>{{ blog.date }}</span>
          <span ml-20px>{{ blog.description }}</span>
        </div>
      </a>
    </div>
  </template>
</template>

<style scoped lang="less">
</style>
