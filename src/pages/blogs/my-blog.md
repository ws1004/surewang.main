---
title: 我的博客
description:
date: 2022-07-02 09:30:21
---

[[toc]]

开发博客网站目的是记录自己的心得体会、技术总结，作为自己的一个「**日记本**」和「**记录本**」。

本站是基于[Vue3](https://cn.vuejs.org/) + [TypeScript](https://www.typescriptlang.org/zh/)开发的静态博客网站，不支持评论功能。



## 博客

博客是一种在线日记型式的个人网站，通常由许多帖子组成，帖子就是结合了文字、图像、其他博客或网站的超链接，用于分享信息。

**那么对于网页来讲，我们如何在网页上描述帖子？**

显而易见的是，网页上能够让我们看到的元素，都是HTML标签元素，通过当前访问浏览器的渲染引擎将HTML标签元素绘制到了浏览器窗口中。

<img src="@/assets/blogs/博客的HTML结构.png" />

**既然如此是不是我们就可以通过HTML标签元素来编写开发博客呢?**

当然可以,但是不推荐，例如:

```html
<h2>我的博客</h2>
<p>2022-07-02 09:30:21</p>
<p>开发博客网站目的是记录自己的心得体会、技术总结，作为自己的一个「日记本」和「记录本」。</p>
<p>本站是基于Vue3 + TypeScript开发的静态博客网站，不支持评论功能。</p>
....
```

上述就是手动写入HTML标签元素来开发博客项目，可想而知开发阶段的冗余程度，之后还要加上CSS样式，也是一件体力活。虽然最后在浏览器上博客产物最终一定是HTML标签元素，但是我们不在乎，我们只在乎开发阶段的体验，那么就可以用到 **Markdown**。

### Markdown

 **Markdown**是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。

可以在开发阶段用**Markdown**来编写博客帖子内容，然后通过**Markdown解析器**，解析成对应的HTML标签元素，极大的增强了开发阶段的体验，也扩展了可维护性。

社区中，有许多优秀的程序员开发的**Markdown解析器**，例如本站使用的:

- [**vite-plugin-vue-markdown**](https://github.com/mdit-vue/vite-plugin-vue-markdown) - markdown 解析 
- [**markdown-it-shiki**](https://github.com/antfu/markdown-it-shiki) -  markdown 代码高亮 
- [markdown-it-ancho](https://github.com/valeriangalliat/markdown-it-anchor)r - markdown 设置锚点 

**解决了Markdown这个问题,开发博客就变得很简单了~**

**Github:** https://github.com/ws1004/surewang.main

**参考:**

- [**Anthony Fu**](https://antfu.me) - Vue/Vite/Nuxt 核心成员,杰出的前端贡献者
