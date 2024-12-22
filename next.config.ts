import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        type: 'asset/resource',
        generator: {
            filename: 'static/media/[name].[hash][ext]',
        },
    });
    return config;
},
};

export default nextConfig;
