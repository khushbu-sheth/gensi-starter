const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  output: "standalone",
  i18n,
};

module.exports = nextConfig;
