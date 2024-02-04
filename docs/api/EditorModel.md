# Editor Model

可理解为**编辑器模型**，即通过 `monaco.editor.create()` 方法创建一个新的 editor 后返回的实例，如下：

```ts
import * as monaco from 'monaco-editor';
const monacoGrph = document.getElementById('monacoGraph');
const editor = monaco.editor.create(monacoGrph, {
    language: 'javascript',
    theme: 'vs-dark',
    value: 'const a = 1;\nconsole.log(a);',
});
```

## 方法

### getValue()

获取当前编辑器模型中的所有文本内容（即所有代码内容）

```ts
getValue(eol?: EndOfLinePreference, preserveBOM?: boolean): string;
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|eol|[EndOfLinePreference]()|||
|preserveBOM|boolean|||

**返回值**
- string：文本内容
