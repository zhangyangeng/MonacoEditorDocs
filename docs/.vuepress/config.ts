import { defineConfig } from "vuepress/config";
import { NavItems4ZH } from './nav/index';

export default defineConfig({
    title: 'Monaco Editor Docs',
    themeConfig: {
        // i18n
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                nav: NavItems4ZH,
            }
        },
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 仓库
        repo: 'zhangyangeng/MonacoEditorDocs',
        smoothScroll: true
    }
});