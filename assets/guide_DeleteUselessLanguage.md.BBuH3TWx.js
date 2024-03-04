import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.CwR7lFEW.js";const h=JSON.parse('{"title":"去除无用语言","description":"","frontmatter":{},"headers":[],"relativePath":"guide/DeleteUselessLanguage.md","filePath":"guide/DeleteUselessLanguage.md","lastUpdated":1709550520000}'),o={name:"guide/DeleteUselessLanguage.md"},n=s('<h1 id="去除无用语言" tabindex="-1">去除无用语言 <a class="header-anchor" href="#去除无用语言" aria-label="Permalink to &quot;去除无用语言&quot;">​</a></h1><p>虽然部分导入可以将打包体积压缩到很小，但这意味着你需要了解所有的字段代表什么<strong>特性</strong>，在快速入门 Monaco 时这将是一个非常具有挑战性的任务</p><p>因此，您也可以采用这种“曲线救国”的方法——即打包结束后删除掉项目中不需要的编程语言</p><p>具体做法就是：</p><ol><li>在项目打包过程中将 <code>/node_modules/monaco-editor/basic-languages</code> 路径下<strong>除了 <code>_.contribution.js</code> 和你需要的语言以外的内容</strong> 都打包到一个 Chunk 中</li><li>在项目打包完成后将打包生成的 Chunk 文件删除（可以用脚本，也可以自行写一个 <a href="https://github.com/zhangyangeng/vite-plugin-delete-statics-files" target="_blank" rel="noreferrer">Vite 插件</a>干预编译过程）</li></ol><div class="danger custom-block"><p class="custom-block-title">注意事项</p><p>该方法存在一定的危险性，任意的删除编译产物并不合理，甚至会导致项目出现意想不到的问题，谨慎操作！</p></div>',6),l=[n];function r(c,i,d,_,g,p){return a(),t("div",null,l)}const m=e(o,[["render",r]]);export{h as __pageData,m as default};
