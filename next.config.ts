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
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Experimental features
  experimental: {
    optimizeCss: true,
    turbo: {
      rules: {
        "*.mp4": ["media-loader"],
        "*.webm": ["media-loader"],
        "*.ogg": ["media-loader"],
        "*.swf": ["media-loader"],
        "*.ogv": ["media-loader"]
      }
    }
  }
};

export default nextConfig;