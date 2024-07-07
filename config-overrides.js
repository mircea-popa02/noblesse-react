// config-overrides.js
module.exports = function override(config, env) {
  // Add a rule to ignore source maps from @googlemaps package
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [/node_modules\/@googlemaps/],
    },
  ];

  return config;
};
