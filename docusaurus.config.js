require("dotenv").config({
    path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

const {
    algoliaConfig,
    algoliaOfflineConfig,
    announcementConfig,
    colorConfig,
    dataConfig,
    footerConfig,
    gtagConfig,
    gtmConfig,
    i18nConfig,
    metadatasConfig,
    navbarConfig,
    pwaConfig,
    prismConfig,
    siteConfig,
    siteNavbarConfig,
} = require("./config");
const { getEditUrl } = require("./src/utils/docs");

const docsOnlyMode = process.env.DOCS_MODE || true;
const routePrefix = !docsOnlyMode ? "/docs" : "/";

module.exports = {
    ...siteConfig,
    i18n: i18nConfig,
    baseUrl: "/",
    /* Optional */
    customFields: {
        // customFields: dataConfig,
        ...siteNavbarConfig,
    },
    scripts: [{ src: "/js/loadtags.js", async: true, type: "module" }],
    themeConfig: {
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 6,
        },
        ...(algoliaConfig["apiKey"] && { algolia: algoliaConfig }),
        announcementBar: announcementConfig,
        colorMode: colorConfig,
        footer: footerConfig,
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        /* Optional */
        // metadatas: metadatasConfig,
        navbar: navbarConfig,
        prism: prismConfig,
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    // remarkPlugins: [],
                    path: "source/docs/",
                    routeBasePath: routePrefix, // IMPORTANT: Turn on docs-only mode
                    sidebarPath: require.resolve("./config/sidebar.config.js"),
                    editUrl: getEditUrl,
                    exclude: ["./contract-dsl/archived", "./economics/archived", "./theory"],
                    /* Docs config options */
                    // showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                    // remarkPlugins: [require("@react-native-website/remark-snackplayer")],
                    // editCurrentVersion: true,
                    // onlyIncludeVersions: process.env.PREVIEW_DEPLOY === "true" ? ["current", ...versions.slice(0, 2)] : undefined,
                    //lastVersion: 'current'
                    // lastVersion: "1.5.6",
                    // versions: {
                    //     current: {
                    //         label: "next",
                    //     },
                    // },
                    // versions: {
                    //     current: {
                    //         label: '2.0.0',
                    //         path: '2.0.0',
                    //     },
                    // },
                },
                ...(gtagConfig["trackingID"] && { gtag: gtagConfig }),
                ...(gtmConfig["containerId"] && { googleTagManager: gtmConfig }),
                // IMPORTANT: disable blog feature
                blog: false,
                /* Blog config options */
                // {
                //     showReadingTime: true,
                //     editUrl: "https://github.com/casper-network/documentation/blob/master/blog",
                //     path: "blog",
                //     blogSidebarCount: "ALL",
                //     blogSidebarTitle: "All Blog Posts",
                //     feedOptions: {
                //         type: "all",
                //         copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
                //     },
                // },
                theme: {
                    //  customCss: [require.resolve("./src/assets/scss/theme.scss")],
                    customCss: [require.resolve("./static/css/custom.scss")],
                },
            },
        ],
    ],
    plugins: [
        "docusaurus-plugin-sass",
        /* Optional */
        // ["@docusaurus/plugin-pwa", pwaConfig],
        // [
        //     "docusaurus-plugin-navdata",
        //     {
        //         directusUrl: process.env.DIRECTUS_URL,
        //         directusGraphqlUrl: process.env.DIRECTUS_GRAPHQL_URL,
        //         directusToken: process.env.DIRECTUS_TOKEN,
        //         query:
        //             "query { header { translations { languages_code { code } login_text search_placeholder logo { id } navigation_tree } } social_media { name url icon { id } } footer { translations { title description manage_cookies_text logo { id title } bottom_links { link_id { title type url open_in_new_tab } } languages_code { code } footer_tree }}}",
        //     },
        // ],
        // [
        //     "docusaurus-plugin-cookiesbanner",
        //     {
        //         directusUrl: process.env.DIRECTUS_URL,
        //         directusGraphqlUrl: process.env.DIRECTUS_GRAPHQL_URL,
        //         directusToken: process.env.DIRECTUS_TOKEN,
        //         query:
        //             "query { cookie_banner { translations {  languages_code { code } items { cookie_item_id { required parameter title description } } manage_body manage_title notice_body notice_title manage_button_text accept_all_button_text confirm_button_text } } }",
        //     },
        // ],
    ],
};
