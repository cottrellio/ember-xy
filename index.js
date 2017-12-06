/* eslint-env node */
'use strict';

module.exports = {
  name: 'xy-components',
  options: {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-css-variables'),
        require('postcss-cssnext'),
      ]
    }
  }
};
