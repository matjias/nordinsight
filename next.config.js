module.exports = {
  async headers() {
      return [
          {
              source: '/(.*)?', // Matches all pages
              headers: [
                  {
                      key: 'X-Frame-Options',
                      value: 'DENY',
                  }
              ]
          }
      ]
  },
  reactStrictMode: true,
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      "child_process": false,
    };

    return config;
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})