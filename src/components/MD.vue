<script setup lang="ts">
import { formatData } from '../utils'
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const headTitle = frontmatter.headTitle
if (headTitle)
  useTitle().value = headTitle
</script>

<template>
  <div m-auto>
    <h1>
      {{ frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" opacity-50>
      {{ formatData(frontmatter.date, 'YYYY-MM-DD HH:mm:ss') }}
    </p>
  </div>
  <slot />
</template>

<style scoped lang="less"></style>
