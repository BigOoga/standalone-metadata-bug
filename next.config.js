require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  env: {
    BE_URL: process.env.BE_URL,
  },
};

module.exports = nextConfig;
