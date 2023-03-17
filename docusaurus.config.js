// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '盘古OS',
  tagline: '以数据结构化和应用函数化为核心设计原则的面向未来的用户操作系统',
  favicon: 'img/icon.svg',
  url: 'https://pangu-os.space',
  baseUrl: '/',
  organizationName: 'Crazydan Studio',
  projectName: 'PanGu OS',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '盘古OS',
        logo: {
          alt: '盘古OS',
          src: 'img/icon.svg'
        },
        items: []
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://studio.crazydan.org/" target="_blank">Crazydan Studio</a>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ]
};

module.exports = config;
