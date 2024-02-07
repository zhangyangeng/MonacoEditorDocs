# Language

## IMonarchLanguage

Monarch 语言定义

|   属性名  |  描述   |   类型  |   默认值    |
|   :--   |   :--    |   :--    |   :--    |
|   tokenizer:white_check_mark: |   分词器，定义分词相关规则  |  Record<[name: string], [IMonarchLanguageRule[]]()>   | -   |
|   ignoreCase  |    语言是否不区分大小写，分词器中的正则表达式会使用该选项来执行区分大小写的匹配，以及 cases 分支中的测试   |   boolean   |    false   |
|   defaultToken|    若使用分词器没有匹配到对应内容，则会返回默认值。建议在着色器开发过程中将其设置为 `invalid` 可以更轻松的发现未匹配的内容   |   string    |  source  |
|   brackets    |       分词器可根据该设置项轻松的定义匹配的大括号        |   [IMonarchLanguageBracket[]]() |   -   |

## LanguageConfiguration

语言配置接口定义了扩展项和各种编辑器功能之间的约定，例如自动括号插入、自动缩进等。

**属性**

|属性名|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|autoClosingPairs|||该语言的自动关闭对，熟入“打开”字符时会自动插入“关闭”字符。 如果未设置，将使用配置的括号。|
|brackets|[CharacterPair[]]()||语言的括号，此配置隐式影响在这些括号周围按 Enter 键|
|comments||||
|onEnterRules||||