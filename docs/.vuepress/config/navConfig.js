//  导航栏配置
module.exports = [
    { text: '首页', link: '/' },
    { text: '劝学', link: '/study/劝学.md' },
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
]