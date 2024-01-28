// 插件配置
module.exports = [['@vuepress/last-updated', {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      const moment = require('moment')
      moment.locale('zh-cn')
      return moment(timestamp).format('LLLL')
    }
}], ['@vssue/vuepress-plugin-vssue', {
    //  使用中文，默认为vuePress的设置的语言，vuePress默认为英文
    locale: 'zh-cn',
    // 自动创建issue，就不用用户手动创建了
    autoCreateIssue:true,
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'steadyHeart511',
    repo: 'vuepress-docs',
    clientId: '329be0f04fffe3ff0099',
    clientSecret: '2ec708cdbf95acab43de769d2bc5f2376f3692e1',
    }],
    ['@vuepress/back-to-top']
]