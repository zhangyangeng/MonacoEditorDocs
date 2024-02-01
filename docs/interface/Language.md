# Language

## IMonarchLanguage

Monarch 语言定义

## LanguageConfiguration

语言配置接口定义了扩展项和各种编辑器功能之间的约定，例如自动括号插入、自动缩进等。

**属性**

|属性名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|autoClosingPairs|||该语言的自动关闭对，熟入“打开”字符时会自动插入“关闭”字符。 如果未设置，将使用配置的括号。|
|brackets|[CharacterPair[]]()||语言的括号，此配置隐式影响在这些括号周围按 Enter 键|
|comments||||
|onEnterRules||||