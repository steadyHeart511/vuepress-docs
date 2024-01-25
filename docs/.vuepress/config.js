module.exports = {
    themeConfig: {
        // logo图标
        logo: '/assets/img/logo.jpg',
        //  禁用导航栏
        // navbar:false,
        //  导航栏
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Java',
                // 下拉列表
                items: [
                    {
                        text: '面向对象',
                        link: '/java/object.md'
                     },
                    { text: '高阶部分', link:'/java/high.md' }
                  ]
            },
            {
                text: 'Vue',
                // 下拉列表
                items: [
                    {
                        text: 'Vue2',
                        link: '/vue/Vue2.md'
                     },
                    { text: 'Vue3', link:'/vue/Vue3.md' }
                  ]
            },
        ],
        // 显示标题，0为不显示标题，1为显示h2 2为显示h2和h3
        // sidebarDepth: 0,
        // 显示所有页面的标题链接，这个感觉还是蛮常用的
        // displayAllHeaders: true,

        // 侧边栏

        // 数组里包含多个对象的写法：就是一个侧边栏有多个分组
        // sidebar: [
        //     '/',
        //     {
        //         title: 'Java速览',
        //         path: '/java/',
        //         sidebarDepth: 1, 
        //         // collapsable: false,  true为折叠，默认折叠
        //         children: [
        //             ['/java/object.md',"面向对象"],
        //             ['/java/high.md',"高级"]
        //         ]
        //     },
        //     {
        //         title: 'Vue速览',
        //         path: '/vue/',
        //         sidebarDepth: 1, 
        //         // collapsable: false,  true为折叠，默认折叠
        //         children: [
        //             ['/vue/Vue2.md',"Vue2"],
        //             ['/vue/Vue3.md',"Vue3"]
        //         ]
        //     },
        // ]
        
        //  对象写法：多个侧边栏，为不同的页面显示不同的侧边栏
        sidebar: {
            '/java/':
                [
                    ['object.md', '面向对象'],
                    ['high.md', '高级'],

                ],
            '/vue/': [
                ['Vue2.md','Vue2'],
                ['Vue3.md','Vue3']
            ]
        }
        
        // 根据标题链接自动生成，但是只会生成h1、h2、h3
        // sidebar: 'auto'
    }
  }