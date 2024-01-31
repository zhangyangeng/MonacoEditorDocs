import { defineConfig } from "vuepress/config";
import { NavItems4ZH } from './nav/index';

export default defineConfig({
    title: 'Monaco Editor Docs',
    dest: '../../dist',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Monaco Editor Docs',
            description: 'Monaco Editor 官方文档翻译及整理'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Monaco Editor Docs',
            description: 'Monaco Editor official document translation and organization',
        }
    },
    themeConfig: {
        // i18n
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                nav: NavItems4ZH,
                lastUpdated: '上次更新',
                editLinkText: '在 GitHub 上编辑此页',
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                nav: NavItems4ZH,
                lastUpdated: 'Last updated',
                editLinkText: 'Edit this page on GitHub',
            }
        },
        // 仓库
        repo: 'zhangyangeng/MonacoEditorDocs',
        smoothScroll: true,
    },
    // 额外监听的文件变化
    extraWatchFiles: ['.vuepress/nav/**', '.vuepress/sidebar/**'],
});