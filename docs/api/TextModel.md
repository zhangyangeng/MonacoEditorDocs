# TextModel

对应接口中的 [ITextModel][]，可理解为一个**编辑器中的文本模型**（下文都将以**模型**进行描述），即通过 `codeEditor.getModel()` 方法返回的实例

## 实例

```ts {8}
import * as monaco from 'monaco-editor';
const monacoGrph = document.getElementById('monacoGraph');
const editor = monaco.editor.create(monacoGrph, {
    language: 'javascript',
    theme: 'vs-dark',
    value: 'const a = 1;\nconsole.log(a);',
});
const model = editor.getModel();
```

## 方法

### findMatches()

在模型中搜索匹配的内容，可通过字符串完整匹配，也可通过正则进行匹配

```ts
findMatches(searchString: string, searchOnlyEditableRange: boolean, isRegex: boolean, matchCase: boolean, wordSeparators: string, captureMatches: boolean, limitResultCount?: number): FindMatch[]
```

**参数**

|参数名|类型|选择|描述|
|:--:|:--:|:--:|:--:|
|||||

**返回值**
- [FindMatch[]]()：

## 事件

### onDidChangeContent

当模型中的内容发生改变的时候触发的事件

```ts
onDidChangeContent(listener: ((e: IModelContentChangedEvent) => void)): IDisposable
```

[ITextModel]: 待更新