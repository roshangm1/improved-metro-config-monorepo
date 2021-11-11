const path = require('path');
const {getDefaultConfig} = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(path.resolve(__dirname, '../../'), {
  mode: 'exotic',
});

defaultConfig.transformer.minifierPath = 'metro-minify-terser';

module.exports = defaultConfig;
