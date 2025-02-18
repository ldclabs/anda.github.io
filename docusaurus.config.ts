import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Anda',
  tagline: '🤖 An AI agent framework built with Rust, featuring ICP blockchain integration and TEE support.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.anda.bot/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ldclabs', // Usually your GitHub org/user name.
  projectName: 'anda.github.io', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ldclabs/anda.github.io/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ldclabs/anda.github.io/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/icpanda-dao.webp',
    navbar: {
      title: 'Anda Docs',
      logo: {
        alt: 'Anda.bot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Build',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ldclabs/anda',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/ICPandaDAO',
            },
            {
              label: 'dMsg.net',
              href: 'https://dMsg.net/PANDA',
            },
            {
              label: 'OpenChat',
              href: 'https://oc.app/community/dqcvf-haaaa-aaaar-a5uqq-cai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'ICPanda DAO SNS',
              href: 'https://dashboard.internetcomputer.org/sns/d7wvo-iiaaa-aaaaq-aacsq-cai',
            },
            {
              label: 'Exchange PANDA',
              href: 'https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=druyg-tyaaa-aaaaq-aactq-cai',
            },
            {
              label: 'LDC Labs',
              href: 'https://github.com/ldclabs',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LDC Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
