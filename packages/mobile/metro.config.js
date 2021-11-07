const path = require('path');
const {getDefaultConfig} = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(path.resolve(__dirname, '../../'), {
  mode: 'exotic',
});

module.exports = defaultConfig;
