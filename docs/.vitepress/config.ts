import { defineConfig } from "vitepress";
import { NavItems4ZH } from './nav/index';
import { SidebarItems4ZH } from "./sidebar/index";

export default defineConfig({
    base: '/MonacoEditorDocs/',
    title: 'Monaco Editor Docs',
    ignoreDeadLinks: true,
    // i18n
    locales: {
        root: {
            lang: 'zh-CN',
            label: 'Monaco Editor Docs',
            description: 'Monaco Editor 官方文档翻译及整理'
        },
        en: {
            lang: 'en-US',
            label: 'Monaco Editor Docs',
            description: 'Monaco Editor official document translation and organization',
        }
    },
    themeConfig: {
        nav: NavItems4ZH,
        sidebar: SidebarItems4ZH,
        footer: {
            message: '基于 MIT 许可发布',
            copyright: 'Copyright © 2024-present Wrysmile'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhangyangeng/MonacoEditorDocs' },
        ],
        editLink: {
            pattern: 'https://github.com/zhangyangeng/MonacoEditorDocs/edit/VitePress/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        lastUpdated: {
            text: '最后更新于',
        },
        docFooter: {
            prev: '上一章',
            next: '下一章'
        },
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        langMenuLabel: '切换语言',
        externalLinkIcon: true,
        search: {
            provider: 'local'
        },
        outline: {
            label: '页面导航'
        },
    },
});