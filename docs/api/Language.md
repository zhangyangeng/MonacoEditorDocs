
# Language

## 实例
```ts
import * as monaco from 'monaco-editor';
const language = monaco.language;
```

## 属性

### example

这是一个属性的样例

**类型**：string

**默认**：例子


## 方法

### getLanguages()

获取当前编辑器注册的所有语言信息（包括自定义语言）

```ts
getLanguages(): ILanguageExtensionPoint[]
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|

**返回值**
- [ILanguageExtensionPoint[]]()：已注册语言配置信息集合

### register()

为当前编辑器注册一个新的语言

```ts
register(language: ILanguageExtensionPoint): void
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|language|[ILanguageExtensionPoint]()|-|新语言配置项|

### setLanguageConfiguration()

为当前语言设置可编辑的配置

```ts
setLanguageConfiguration(languageId: string, configuration: LanguageConfiguration): IDisposable
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|languageId|string|-|语言唯一id标识|
|configuration|[LanguageConfiguration]()|-|语言配置项|

**返回值**
- [IDisposable]()：

**来源**
> Defined in editor.api.d.ts:6160

### setMonarchTokensProvider()

设置语言的令牌提供者（由Monarch 实现）此标记生成器将与使用 `setTokensProvider` 或 `registerTokensProviderFactory` 设置的标记生成器独占，但将与使用 `registerDocumentSemanticTokensProvider` 或 `registerDocumentRangeSemanticTokensProvider` 设置的标记提供程序一起使用

```ts
setMonarchTokensProvider(languageId: string, languageDef: IMonarchLanguage | Thenable<IMonarchLanguage>): IDisposable
```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|languageId|string|-|语言唯一id标识|
|languageDef|[IMonarchLanguage]() \| [Thenable\<IMonarchLanguage\>]()|-||

**返回值**
- [IDisposable]()：

**来源**
> Defined in editor.api.d.ts:6283

-----

以下是编写时的样例

### ()



```ts

```

**参数**

|参数名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|||||

**返回值**
- []()：

**来源**
> 