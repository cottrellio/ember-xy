/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-xy',
  options: {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-css-variables'),
        require('postcss-cssnext'),
      ]
    },
  }
};
