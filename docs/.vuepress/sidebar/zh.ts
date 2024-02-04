import { SidebarConfig4Multiple } from "vuepress/config";

export const SidebarItems4ZH: SidebarConfig4Multiple = {
    '/guide/': ['', 'QuicklyStarted', 'DepthUsage'],
    '/api/': ['', 'Editor', 'EditorModel', 'Language'],
    '/interface/': ['', 'Editor', 'Language']

    // 分组样例
    // '/interface/': [
    //     {
    //         title: 'Editor',
    //         collapsable: false,
    //         children: ['Editor'],
    //     },
    //     {
    //         title: 'Language',
    //         collapsable: false,
    //         children: ['Language']
    //     }
    // ],
};