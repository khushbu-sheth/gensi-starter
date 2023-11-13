module.exports = {
  debug: process.env.NODE_ENV === "development", // log when in dev mode
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
