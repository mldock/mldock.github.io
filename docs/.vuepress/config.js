const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MLDOCK',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  host: 'localhost',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/mldock/mldock',
    editLinks: false,
    // displayAllHeaders: true, // Default: false
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Quick Start',
        link: '/guide/quickStart',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Command Line Reference',
        link: '/cli/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: true,
          children: [
            './',
            'quickStart',
            'coreConcepts',
            'platforms',
            'contributing'
          ]
        },
        {
          title: 'Command Line Reference',
          collapsable: true,
          children: [
            '../cli/container',
            '../cli/local',
            '../cli/registry',
            '../cli/configure',
            '../cli/templates'
          ]
        }
      ],
      '/cli/': [
        {
          title: 'Command Line Reference',
          collapsable: false,
          children: [
            'container',
            'local',
            'registry',
            'configure',
            'templates'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['container', {
      type: 'col-wrapper',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-full',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-half',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-third',
      defaultTitle: '',
    }],
  ]
}
