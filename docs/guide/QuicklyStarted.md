# 快速上手

## 安装

```shell
npm install monaco-editor
```

## 引入库

在需要使用的组件中引入该依赖

```ts
import * as monaco from 'monaco-editor';
```

## 引入Web Worker

该编辑器内置了针对部分语言的 `Web Worker` 和编辑器正常使用时的基础 `Web Worker`，如果需要正常使用内置语言和编辑器，建议按以下方式引入:

**ESM**

> 参见 [ESM官方引入方式][]

**AMD**

> 参见 [AMD官方引入方式][]

::: danger 注意
若不引入 `Web Wroker` ，您可能会遇到如下报错（详见 [#2122][]）：

Error: Unexpected usage
at EditorSimpleWorker.loadForeignModule (editorSimpleWorker.js?ccf6:540)
:::

这里引入例子如下：

```ts
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
    // 提供一个定义worker路径的全局变量
    getWorker(_: unknown, label: string): Worker {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        // 基础功能文件， 提供了所有语言通用功能 无论使用什么语言，monaco都会去加载他
        return new editorWorker(); 
    },
};
```

## 提供编辑器容器

编辑器需要挂载到一个元素容器上

```html
<div id="monacoGraph" style="width: 600px; height: 400px"></div>
```

## 基于已有容器创建编辑器

准备工作已完成，接下来就可以创建编辑器了

```ts
const monacoGrph = document.getElementById('monacoGraph');
const monacoEditor = monaco.editor.create(monacoGrph, {
    // 设置代码语言
    language: 'javascript',
    // 设置主题
    theme: 'vs-dark',
    // 编辑器默认显示的值
    value: 'const a = 1;\nconsole.log(a);',
});
```

::: tip 提示
编辑器相关 API 或配置项请前往 [API][] 页面查看
:::

启动服务，将看到一个简单的编辑器就正常加载了。到这里，你已经快速入门 `Monaco` 编辑器了，接下来可以看看更 [高级][] 的用法了

[API]: /api/README.md
[AMD官方引入方式]: https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-amd.md
[ESM官方引入方式]: https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md
[#2122]: https://github.com/microsoft/monaco-editor/issues/2122
[高级]: ./PartialImport.md