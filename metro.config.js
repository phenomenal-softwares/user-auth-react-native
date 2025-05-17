// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'axios') {
    return context.resolveRequest(context, 'axios/dist/esm/axios.js', platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
