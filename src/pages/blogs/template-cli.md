---
title: 开发自己的脚手架
description:
date: 2022-09-12 20:49:45
---

[[toc]]

## 什么是脚手架?

脚手架这一词最早出自于建筑工程，是一种临时性的建筑工具平台，架设在正在组建或重装的楼房或建筑物，辅助施工建设。

<img src="@/assets/blogs/建筑脚手架.webp" />

随着前端技术的发展，**模块化**丶**组件化**丶**工程化**思想和开发模式的应用，让前端项目变得愈发复杂。

并且为了满足较好的开发体验和低版本浏览器的支持，通常项目中会通过打包工具去构建我们的项目，例如Webpack丶Rollup丶Vite等...

在早期开发项目的时候我们需要对打包工具进行配置才能够去开发项目，例如Webpack。令人头大的配置项折磨过很多前端开发者，甚至以前还有**webpack工程师**这样的岗位。

所以面对这种情况，一键生成无需配置的项目模板工具，就这样诞生了，此工具的达成的效果类似于建筑工程上的脚手架，用于辅助开发，快速搭建一个平台(模板)。

## 怎么实现脚手架

<img src="@/assets/blogs/简易脚手架流程图.jpeg" />

1. （**根据命令,找对对应的执行文件**）当命令行输入**create-sure-app** 则会去访问 **pageage.json** 项目包管理文件下的**bin**属性，找到**bin**属性下**create-sure-app**对应的执行文件,开始执行逻辑。
2. （**提供命令行交互选项**）基于 [**prompts**](https://www.npmjs.com/package/prompts) - 轻量级、美观、人性化的交互提示。
3. （**拿到用户选择的数据并且拼接路径**）根据**用户输入的项目名**和用户**当前所在的Nodejs工作进程**,获取到需要生成文件的目标路径（**RootDirPath**）,并且**根据用户的选择的数据**，拼接获取脚手架内置对应**template**的路径（**TemplateDirPath**）。
4. （**创建目标文件夹，并且拷贝模板**）基于**RootDirPath**创建文件夹，然后再将**TemplateDirPath**对应的模板递归的拷贝到**RootDirPath**中，就此完成项目的创建。



上述就是一个简易脚手架生成模板的执行原理，如果想扩展更多的功能或者可选式的集成各种插件，可以用到 [**EJS**](https://ejs.bootcss.com/#promo) - 高效的嵌入式 JavaScript 模板引擎。



**GitHub:** https://github.com/ws1004/create-sure-app

**NPM:**  https://www.npmjs.com/package/create-sure-app



**参考:**

- [**Vite Cli**](https://cn.vitejs.dev/). - **Vite**下一代前端构建工具

  
