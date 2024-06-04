import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
  // other Next.js configuration options
};

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'javascript-mastery',
  project: 'javascript-nextjs',
};

const sentryInitOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryInitOptions);
