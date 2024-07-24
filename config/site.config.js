const { cdns, customScripts } = require("./script.config");

module.exports = {
    title: "Casper",
    tagline: "The best search experience for docs, integrated in minutes, for free",
    url: "https://casper-devrel.github.io",
    baseUrl: "/docs",
    trailingSlash: true,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    onDuplicateRoutes: "throw",
    favicon: "icon/favicon.ico",
    organizationName: "CasperNetwork",
    projectName: "Casper",
    /* Optional */
    // clientModules: customScripts,
    // scripts: cdns,
};
