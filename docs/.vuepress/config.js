module.exports = {
    title: 'ZyUI',
    description: 'scss构建纯cssUI',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '组件', link: '/guide/common/button' },
        ],
        sidebar: {
            '/guide/':[
                {
                    title:'通用',
                    collapsable:false,
                    children:[
                        'common/button',
                        'common/icon',
                    ]
                },
                {
                    title:'表单',
                    collapsable:false,
                    children:[
                        'form/input'
                    ]
                }
            ],
        }
    }
}