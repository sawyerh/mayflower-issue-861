module.exports = api => {
  /**
   * Cache based on the value of NODE_ENV. Any time the using callback returns
   * a value other than the one that was expected, the overall config function
   * will be called again and a new entry will be added to the cache.
   */
  api.cache.using(() => process.env.NODE_ENV);

  const config = {
    presets: ["@babel/preset-react"]
  };

  return config;
};
