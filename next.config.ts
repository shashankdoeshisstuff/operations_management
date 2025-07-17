import type { NextConfig } from "next";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // If using MiniCssExtractPlugin loader
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[id].[contenthash].css',
      })
    );

    return config;
  },
};

export default nextConfig;
