import { DefaultTheme } from "vitepress";

export const SidebarItems4ZH: DefaultTheme.Sidebar = {
    '/guide/': [
        {
            text: '基础用法',
            items: [
                { text: '介绍', link: '/guide/' },
                { text: '快速上手', link: '/guide/QuicklyStarted' },
            ]
        },
        {
            text: '打包优化',
            items: [
                { text: '部分导入', link: '/guide/PartialImport' },
                { text: '去除无用语言', link: '/guide/DeleteUselessLanguage'}
            ]
        },
        {
            text: '高级用法',
            items: [
                { text: 'Monarch', link: '/guide/Monarch' },
                { text: '自定义语言', link: '/guide/CustomLanguage' },
            ]
        }
    ],
    '/api/': [
        {
            text: '介绍',
            link: '/api/',
        },
        {
            text: 'Editor 命名空间',
            collapsed: true,
            items: [
                { text: 'Editor', link: '/api/Editor' },
                { text: 'CodeEditor', link: '/api/CodeEditor' },
                { text: 'TextModel', link: '/api/TextModel' },
            ],
        },
        {
            text: 'Language 命名空间',
            link: '/api/Language',
        }
    ],
    '/interface/': [
        { text: '介绍', link: '/interface/' },
        { text: 'Editor', link: '/interface/Editor'},
        { text: 'Language', link: '/interface/Language'}
    ],
};