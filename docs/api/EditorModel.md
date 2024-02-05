# Editor Model

可理解为**编辑器模型**（下文都将以**编辑器**进行描述），即通过 `monaco.editor.create()` 方法创建一个新的 editor 后返回的实例，如下：

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

### dispose()

销毁编辑器

```ts
dispose(): void;
```

**参数**
- 无

**返回值**
- 无


### getValue()

获取当前编辑器中的所有文本内容（即所有代码内容）

```ts
getValue(eol?: EndOfLinePreference, preserveBOM?: boolean): string;
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|eol|[EndOfLinePreference]()|-||
|preserveBOM|boolean|-||

**返回值**
- string：文本内容

### setModel()

将当前的模型设置附加到当前编辑器上

```ts
setModel(model: ITextModel | null): void;
```

::: danger 注意：
如果之前的模型是由编辑器通过 `option选项` 对象中的 value 值创建的，那么之前的模型将被销毁。

如果之前的模型是通过 `setModel()` 方法设置的，或者是 `option选项` 对象中的 model 值创建的，则之前的模型将不会被销毁。

可参考以下样例：
:::

```ts
// 通过 value 值创建：√
monaco.editor.create(monacoGrph, {
    language: 'javascript',
    theme: 'vs-dark',
    value: 'const a = 1;\nconsole.log(a);',
});

// 通过 setModel() 方法创建：×
monaco.editor.setModel('const a = 2;');
// 通过 model 值创建：×
monaco.editor.create(monacoGrph, {
    language: 'javascript',
    theme: 'vs-dark',
    model: null,
});
```

**参数**

|参数名|类型|选择|描述|
|:--:|:--:|:--:|:--:|
|model|[ITextModel]() | null|必选||

**返回值**
- 无

### setValue()

将当前的代码内容设置到当前编辑器上，即替换整个编辑器内容

```ts
setValue(newValue: string): void;
```

**参数**

|参数名|类型|选择|描述|
|:--:|:--:|:--:|:--:|
|newValue|string|必选|新的代码内容|

**返回值**
- 无

### updateOptions()

更新当前编辑器的初始化配置

```ts
updateOptions(newOptions: IEditorOptions): void;
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|newOptions|[IEditorOptions]()|-||

**返回值**
- 无
