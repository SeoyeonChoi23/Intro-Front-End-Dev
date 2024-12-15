// firebase setup - required to create metro.config.js in root directory. 
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');
module.exports = defaultConfig;