/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "https://journal-listing-backend.herokuapp.com",
  },
  i18n,
};

module.exports = nextConfig;
