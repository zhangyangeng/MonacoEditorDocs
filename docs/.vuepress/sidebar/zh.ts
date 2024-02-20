import { SidebarConfig4Multiple } from "vuepress/config";

export const SidebarItems4ZH: SidebarConfig4Multiple = {
    '/guide/': ['', 'QuicklyStarted', {
        title: '高级用法',
        path: '',
        collapsable: true,
        children: ['PartialImport', 'Monarch', 'CustomLanguage']
    }],
    '/api/': ['',
        {
            title: 'Editor',
            path: '',
            collapsable: true,
            children: ['Editor', 'CodeEditor', 'TextModel'],
        },
        'Language'
    ],
    '/interface/': ['', 'Editor', 'Language']
};