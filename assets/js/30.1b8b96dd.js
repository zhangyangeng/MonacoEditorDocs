(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{315:function(t,a,e){"use strict";e.r(a);var s=e(10),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"monarch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monarch"}},[t._v("#")]),t._v(" Monarch")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Monarch")]),t._v(" 是一个使用 "),a("code",[t._v("JSON")]),t._v(" 来创建声明性的语法高亮器，同时也是一个通用的解决方案。该方案可以指定具有复杂状态转换、动态大括号匹配、自动完成、嵌入其他语言等高亮行为，这些都将在以下标注为 "),a("strong",[a("font",{attrs:{color:"red"}},[t._v("高级")])],1),t._v(" 的部分提到，但建议初学者学习时可以跳过相关描述。")])]),t._v(" "),a("p",[t._v("如果您尝试一些高级用法，如下一小节的"),a("RouterLink",{attrs:{to:"/guide/CustomLanguage.html#自定义语言"}},[t._v("自定义语言")]),t._v("，那么 Monarch 相关内容建议您仔细阅读，这对您后续的使用将有极大的帮助")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("本部分参考自官方文档的 "),a("a",{attrs:{href:"https://microsoft.github.io/monaco-editor/monarch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monarch"),a("OutboundLink")],1),t._v("，若翻译或描述不准确都可前往官方文档进行查看")])]),t._v(" "),a("h2",{attrs:{id:"创建语言定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建语言定义"}},[t._v("#")]),t._v(" 创建语言定义")]),t._v(" "),a("p",[t._v("语言定义的数据结构就是一个 JSON 值，该值内部可以描述语言的各种属性，目前可识别的属性如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tokenizer✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("分词器，定义分词相关规则")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Record<[name: string], "),a("a",{attrs:{href:""}},[t._v("IMonarchLanguageRule[]")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ignoreCase")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("语言是否不区分大小写，分词器中的正则表达式会使用该选项来执行区分大小写的匹配，以及 cases 分支中的测试")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("defaultToken")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("若使用分词器没有匹配到对应内容，则会返回默认值。建议在着色器开发过程中将其设置为 "),a("code",[t._v("invalid")]),t._v(" 可以更轻松的发现未匹配的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("source")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("brackets")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("分词器可根据该设置项轻松的定义匹配的大括号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:""}},[t._v("IMonarchLanguageBracket[]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("p",[t._v("一个简单定义的例子如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tokenizer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*?"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("更多属性请前往 "),a("RouterLink",{attrs:{to:"/interface/Language.html#IMonarchLanguage"}},[t._v("IMonarchLanguage")]),t._v(" 查看")],1),t._v(" "),a("h2",{attrs:{id:"创建分词器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分词器"}},[t._v("#")]),t._v(" 创建分词器")])])}),[],!1,null,null,null);a.default=n.exports}}]);