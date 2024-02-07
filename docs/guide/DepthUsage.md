---
sidebarDepth: 2
---

# 深入用法

## Monarch

> **Monarch** 是一个使用 `JSON` 来创建声明性的语法高亮器，同时也是一个通用的解决方案。该方案可以指定具有复杂状态转换、动态大括号匹配、自动完成、嵌入其他语言等高亮行为，这些都将在以下标注为 **<font color="red">高级</font>** 的部分提到，但建议初学者学习时可以跳过相关描述。

如果您尝试一些高级用法，如下一小节的[自定义语言][]，那么 Monarch 相关内容建议您仔细阅读，这对您后续的使用将有极大的帮助

**注**：本部分参考自官方文档的 [Monarch][]，若翻译或描述不准确都可前往官方文档进行查看


### 创建语言定义

语言定义的数据结构就是一个 JSON 值，该值内部可以描述语言的各种属性，目前可识别的属性如下：

|   属性名  |  描述   |   类型  |   默认值    |
|   :--   |   :--    |   :--    |   :--    |
|   tokenizer:white_check_mark: |   分词器，定义分词相关规则  |  Record<[name: string], [IMonarchLanguageRule[]]()>   | -   |
|   ignoreCase  |    语言是否不区分大小写，分词器中的正则表达式会使用该选项来执行区分大小写的匹配，以及 cases 分支中的测试   |   boolean   |    false   |
|   defaultToken|    若使用分词器没有匹配到对应内容，则会返回默认值。建议在着色器开发过程中将其设置为 `invalid` 可以更轻松的发现未匹配的内容   |   string    |  source  |
|   brackets    |       分词器可根据该设置项轻松的定义匹配的大括号        |   [IMonarchLanguageBracket[]]() |   -   |

一个简单定义的例子如下：
```json
{
    "tokenizer": {
        "root": [
            [/".*?"/, "string"],
        ]
    }
}
```

更多属性请前往 [IMonarchLanguage][] 查看

### 创建分词器


## 自定义语言


[自定义语言]: ./DepthUsage.md#自定义语言
[IMonarchLanguage]: /interface/Language.md#IMonarchLanguage
[Monarch]: https://microsoft.github.io/monaco-editor/monarch.html