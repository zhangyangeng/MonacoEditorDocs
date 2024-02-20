# Editor

编辑器，可通过该实例创建各类代码编辑器等操作

## 实例
```ts
import * as monaco from 'monaco-editor';
const editor = monaco.editor;
```

## 方法

### create()

基于一个 `DOM` 元素创建一个新的编辑器模型，创建好的编辑器模型会读取该 `DOM` 元素的大小来当做自身大小

::: tip 提示：
该 `DOM` 元素必须是一个空的元素，即不包含任意 DOM 元素的节点
:::

```ts
create(domElement: HTMLElement, options?: IStandaloneEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneCodeEditor
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|domElement|[HTMLElement]()|||
|options|[IStandaloneEditorConstructionOptions]()|||
|override|[IEditorOverrideServices]()|||

**返回值**
- [IStandaloneCodeEditor]()：

### createModel()

基于代码内容创建一个新的编辑器模型

```ts
createModel(value: string, language?: string, uri?: Uri): ITextModel
```

**参数**

|参数名|类型|选择|描述|
|:--:|:--:|:--:|:--:|
|value|string|必选|编辑器内容|
|language|string|可选|编辑器语言|
|uri|[Uri]()|可选|？|

**返回值**
- [ITextModel]()：
