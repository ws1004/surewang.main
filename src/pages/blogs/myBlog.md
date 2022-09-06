---
title: 我的博客
description: 我的博客搭建过程~
date: 2022-09-06 14:56:48
---

[[toc]]

博客灵感来源于 `Anthony Fu` Vue/Vite/Nuxt核心成员,杰出的前端贡献者 https://antfu.me/.

## 目的

一直以来都想拥有属于自己的博客，
作为笔记和学习的记录存在着，之前用 `VitePress` 搭建了一个，但是觉得太文档化了，所以才有了此站.

## 使用到的技术栈

### Vue3

Vue3不论是在开发体验上或是灵活性上都是极好的，相较于Vue2的 `Options API`，Vue3的 `Composition API` 极大的提高了数据的`可组装性与可维护性`，并且对于 `TypeScript` 的支持也是极好的.

### TypeScript

TypeScript为JavaScript提供了类型注解和类型检查功能，用部分类型注解的代码来换取`可能会在运行时发生错误的风险`，并且会适当的`降低开发者的心智负担`，因为规定的好了类型会有较为明显的提示和类型检查报错，对于大型项目来说选择 `TypeScript` 来开发项目是很好的选择.


### Vite

⚡️ 般的速度，用就完事了

### 插件

- Unocss - **原子化CSS** https://github.com/unocss/unocss
- vite-plugin-vue-markdown **markdown解析** https://github.com/mdit-vue/vite-plugin-vue-markdown
- markdown-it-shiki **markdown代码高亮** https://github.com/antfu/markdown-it-shiki
- markdown-it-anchor **markdown设置锚点** https://github.com/valeriangalliat/markdown-it-anchor
- vite-plugin-pages **你的目录就是你的路由~** https://github.com/hannoeru/vite-plugin-pages
