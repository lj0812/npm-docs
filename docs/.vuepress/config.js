/*
 * @Author       : lj0812
 * @Date         : 2020-05-13 00:38:20
 * @LastEditTime : 2020-05-13 16:43:20
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
      '/packages-and-modules/': [
        {
          title: '包和模块介绍',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '向注册表提供包',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '更新和管理发布的包',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '从注册表获取包',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '保护您的代码',
          collapsable: false,
          children: [

          ]
        }
      ],
      '/cli-docs/': [
        {
          title: 'CLI命令',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '配置npm',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '使用npm',
          collapsable: false,
          children: [

          ]
        }
      ]
    }
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}