# 部分导入

## 引言

在快速上手部分，我们使用以下语句导入了依赖
```ts
import * as monaco from 'monaco-editor'
``` 
但需注意的是：**此为全部导入**，即将 Monaco 中所有的功能及语言都导入并生成最终构建产物，因此当您的项目构建完成时，您会在静态资源中发现有很多的 js 文件，细细观察即可发现此为自带的语言，如下：

![构建产物图][]

这对于一个简单、小型的 JavaScript 编辑器来说非常非常的重，因此我们有必要进行导入优化来排除那些我们不需要的依赖，做到最小化的构建一个项目

::: tip 提示
以下内容参考自 [@GeorgeWhite][] ，详情可前往进行查看；以下包含案例均以可以正常实现一个 JavaScript 编辑器为目标
::: 

## 使用 Vite 打包

### 导入核心功能

在官方文档中 [webpack-plugin][] 处有提到如果只需要部分功能和语言的子集可以这样导入：
```ts
import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired
```

使用以上第二行导入方式后我们可以发现编译后的产物不再包含语言文件，且当运行项目时发现语法高亮、输入关联提醒等功能失效，这是因为我们目前没有引入语言及功能特性导致的

首先我们需要了解 Monaco 中携带了哪些特性及语言，可以去 `node_modules\monaco-editor\esm\metadata.js` 路径下的该文件查看对应特性及语言，以下是个人理解对应字段代表的功能特性：
::: details 功能特性详情
|          label        |       description     |
|:--:|:--:|:--:|
|   accessibilityHelp   |                       |   
:::

### 导入所需语言

`metadata.js` 文件中包含了语言的 entry 文件，因此如果想要导入指定的语言的话只要按该路径导入即可，如下：
```ts
// js
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// ts
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
```

导入之后发现语法高亮可以正常使用了，但是没有输入提示，因此需要导入特定的功能特性

### 导入功能特性

`metadata.js` 文件中包含了特性的 entry 文件，因此按自己所需导入指定的功能特性即可，如下：
```ts
// 引入代码折叠特性
import 'monaco-editor/esm/vs/editor/contrib/folding/browser/folding';
```

## 使用 Webpack 打包

使用 Webpack 打包工具时，官方提供了专门的插件来简化以上步骤，可以前往 [Monaco Editor Webpack Loader Plugin][] 进行查看，仅需要在插件配置中指定你所需要引入的语言和功能特性即可

[构建产物图]: /statics_language.png
[webpack-plugin]: https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin
[Monaco Editor Webpack Loader Plugin]: https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin
[@GeorgeWhite]: https://juejin.cn/post/7133041161618325512#heading-0