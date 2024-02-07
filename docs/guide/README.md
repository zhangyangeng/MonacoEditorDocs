---
sidebarDepth: 2
---

# 介绍

**Monaco 编辑器**（以下均以 Monaco 代指）是一款用来支持 VS Code 的代码编辑器，它提供了大部分 VS Code 中所支持的功能，同时也内置了非常多的常用编程语言用以语法高亮。使用它可以在 Web 项目中快速实现代码编辑等功能，但目前仅支持 Edge、Chrome、FireFox、Safari 和 Opera 等 Web 端浏览器，移动端浏览器并不支持。

使用过该编辑器或即将打算学习该编辑器的开发者大都有这种困恼：**官方文档读起来非常的晦涩，无法快速上手使用该编辑器**。本文档就是在笔者学习使用的过程中进行了翻译与整理得来的，但因个人精力有限，目前还在持续更新中~

## 版本

本文档仅基于编写时的最新版本 [v0.45.0](https://www.npmjs.com/package/monaco-editor/v/0.45.0)为基准，当当前版本补充完成时即停止更新。后续若官方有更新时可参考该文档进行查看，目前并未有多版本整理的计划。

## 标识

在编写文档时，对于有特殊含义的内容会有 `Emoji` 来标识，除非特殊说明，则一般按以下定义为主：

:white_check_mark:：标识为必选参数，不标识该表情则默认为可选参数

## 概念

::: tip 提示
虽然 Monaco 可以很好的驱动 VSCode，但仍建议您在使用 Monaco 之前详细了解以下概念定义，才能更有效的使用 Monaco
::: 

本部分内容是对 [官方描述](https://github.com/microsoft/monaco-editor?tab=readme-ov-file#concepts) 进行了翻译

### 模型（Models）

Monaco 的核心就是模型了，每个模型都是唯一的，模型可以代指一个已经打开的文件，如使用 VSCode 打开一个 `.js` 文件；也可以代指一个虚拟创建出来的用于保存文本内容的文件

您可以通过模型相关的 API 来更新文本内容，或为当前模型设置其对应的编程语言，或跟踪内容的编辑历史记录

### 统一资源定位符（URIs）

每个模型都是由一个 URI 进行标识的，这就是为什么不同的模型不可能具有相同的 URI 的原因。因此，建议开发者在 Monaco 中展示代码内容时，应该考虑到用户正在编辑的文件所匹配的虚拟文件系统应该是什么。例如可以使用本地文件访问协议 `file:///` 来作为一个基本的文件访问路径

但是如果在没有 URI 的情况下创建了模型，则该模型的 URI 将是 `inmemory://model/1` 且会随着模型的增多自动增加其数字

### 编辑器（Editors）

编辑器即面向用户的一个模型视图，它是实实在在渲染到了对应的 DOM 节点上的内容，而非常典型的编辑器操作大概有如下几个，包括：
- 显示模型内容
- 管理视图状态
- 执行指定的操作或命令

### 注入器（Providers）

注入器可以为编辑器提供智能编辑功能，如：鼠标悬浮时的提示信息，代码自动补全，代码格式校验等

注入器和**语言服务通信协议**（[Language Server Protocol](https://microsoft.github.io/language-server-protocol/)）不同，但通常都会映射到语言服务通信协议上

注入器通常是运行在**模型**上的，同时某些智能功能取决于文件所对应的 URI 的。如：TypeScript 用于解析导入，JSON IntelliSense 用于确定模型应该应用哪个 JSON 架构。因此，选择对应的模型 URI 是非常重要的

### 一次性物品（Disposables）

许多与 Monaco 相关的对象通常都实现了 `.dispose()` 方法。该方法用于某些资源在不再需要时对其执行清理操作。如：当你调用 `model.dispose()` 时将注销掉对应模型，从而释放新模型的 URI。编辑器应该在合适的时机将其资源释放掉并删除其的模型监听器

### 语法高亮引擎（Monarch）

Monarch 是一个用于语法高亮和代码块解析的通用解决方案。

Monarch 使用一种简单的可跨平台的基于 JSON 的描述语法来定义语法规则。通过定义词法和语法规则，它可以根据这些规则对代码进行分词（Tokenization）和高亮显示。开发人员可以使用 Monarch 来为各种编程语言和标记语言创建自定义的语法高亮。

Monarch 规定了一种编程语言所需要的 **关键字（keyword）、变量（variable）、操作符（operator）、分词器（tokenizer）** 等内容：
- **关键字（keyword）**：即语言的内置关键字，如 JAVA 语言中的 `public/private` 等
- **变量（variable）**：一门语言通常都可定义其变量与常量
- **操作符（operator）**：表达式中的操作符，如 `=/+/-` 等
- **分词器（tokenizer）**：可描述为一组正则表达式的分词规则，可根据对应的正则表达式来识别不同的内容，如：关键词、括号、注释块等内容并进行相应的高亮

::: tip 提示
Monarch 相关内容可前往深入用法中的 [Monarch](./DepthUsage.md#Monarch) 进行详细查看
:::

## 参考

本文编写时主要参考如下几个网站与内容，同时也感谢各位的付出
- [Monaco Editor 官网](https://microsoft.github.io/monaco-editor/)
- [Monaco Editor 源码](https://github.com/microsoft/monaco-editor)
- [Monaco Editor issue](https://github.com/microsoft/monaco-editor/issues)
- [Monaco editor 学习文档](http://aydk.site/)

## 关于

本文档目前是基于 [VuePress v1.x](https://vuepress.vuejs.org/zh/) 进行生成的，如果您在查阅中发现有任何问题，可以点击对应页面底部的 `在 GitHub 上编辑此页` 进行修改并发送 PR，感谢您对文档翻译的贡献