import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework.CwR7lFEW.js";const y=JSON.parse('{"title":"Editor","description":"","frontmatter":{},"headers":[],"relativePath":"api/Editor.md","filePath":"api/Editor.md","lastUpdated":1709292294000}'),i={name:"api/Editor.md"},l=s(`<h1 id="editor" tabindex="-1">Editor <a class="header-anchor" href="#editor" aria-label="Permalink to &quot;Editor&quot;">​</a></h1><p>编辑器，可通过该实例创建各类代码编辑器等操作</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> monaco </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;monaco-editor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> editor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> monaco.editor;</span></span></code></pre></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="create" tabindex="-1">create() <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create()&quot;">​</a></h3><p>基于一个 <code>DOM</code> 元素创建一个新的编辑器模型，创建好的编辑器模型会读取该 <code>DOM</code> 元素的大小来当做自身大小</p><div class="tip custom-block"><p class="custom-block-title">提示：</p><p>该 <code>DOM</code> 元素必须是一个空的元素，即不包含任意 DOM 元素的节点</p></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(domElement: HTMLElement, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IStandaloneEditorConstructionOptions, override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IEditorOverrideServices): IStandaloneCodeEditor</span></span></code></pre></div><p><strong>参数</strong></p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">domElement</td><td style="text-align:center;"><a href="./.html">HTMLElement</a></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">options</td><td style="text-align:center;"><a href="./.html">IStandaloneEditorConstructionOptions</a></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">override</td><td style="text-align:center;"><a href="./.html">IEditorOverrideServices</a></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><p><strong>返回值</strong></p><ul><li><a href="./.html">IStandaloneCodeEditor</a>：</li></ul><h3 id="createmodel" tabindex="-1">createModel() <a class="header-anchor" href="#createmodel" aria-label="Permalink to &quot;createModel()&quot;">​</a></h3><p>基于代码内容创建一个新的编辑器模型</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value: string, language</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string, uri</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Uri): ITextModel</span></span></code></pre></div><p><strong>参数</strong></p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">类型</th><th style="text-align:center;">选择</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">value</td><td style="text-align:center;">string</td><td style="text-align:center;">必选</td><td style="text-align:center;">编辑器内容</td></tr><tr><td style="text-align:center;">language</td><td style="text-align:center;">string</td><td style="text-align:center;">可选</td><td style="text-align:center;">编辑器语言</td></tr><tr><td style="text-align:center;">uri</td><td style="text-align:center;"><a href="./.html">Uri</a></td><td style="text-align:center;">可选</td><td style="text-align:center;">？</td></tr></tbody></table><p><strong>返回值</strong></p><ul><li><a href="./.html">ITextModel</a>：</li></ul>`,20),n=[l];function r(d,h,o,p,c,g){return a(),e("div",null,n)}const E=t(i,[["render",r]]);export{y as __pageData,E as default};
