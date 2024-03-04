# 去除无用语言

虽然部分导入可以将打包体积压缩到很小，但这意味着你需要了解所有的字段代表什么**特性**，在快速入门 Monaco 时这将是一个非常具有挑战性的任务

因此，您也可以采用这种“曲线救国”的方法——即打包结束后删除掉项目中不需要的编程语言

具体做法就是：
1. 在项目打包过程中将 `/node_modules/monaco-editor/basic-languages` 路径下**除了 `_.contribution.js` 和你需要的语言以外的内容** 都打包到一个 Chunk 中
2. 在项目打包完成后将打包生成的 Chunk 文件删除（可以用脚本，也可以自行写一个 [Vite 插件][]干预编译过程）

::: danger 注意事项
该方法存在一定的危险性，任意的删除编译产物并不合理，甚至会导致项目出现意想不到的问题，谨慎操作！
:::

[Vite 插件]: https://github.com/zhangyangeng/vite-plugin-delete-statics-files