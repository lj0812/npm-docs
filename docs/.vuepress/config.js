/*
 * @Author       : lj0812
 * @Date         : 2020-05-13 00:38:20
 * @LastEditTime : 2020-05-13 16:14:37
 * @Description  : vuepress config file
 */

module.exports = {
  // title: 'npm docs',
  description: 'npm docs',
  head: [
    ['link', { rel: 'icon', herf: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/npm-logo-red.png',
    nav: [
      { text: '开始', link: '/getting-started/' },
      { text: '包和模块', link: '/packages-and-modules/' },
      { text: '命令行', link: '/cli-docs/' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          title: '设置您的npm用户帐户',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '支付您的npm用户帐户',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '管理您的npm用户帐户',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '配置本地环境',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '故障排除',
          collapsable: false,
          children: [

          ]
        }
      ],
      '/packages-and-modules/': [],
      '/cli-docs/': []
    }
  },

  plugins: ['@vuepress/back-to-top']
}