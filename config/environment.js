/* eslint-env node */
'use strict';

module.exports = function(environment) {
  const ENV = {
    environment,
    modulePrefix: 'styleguide',
    freestyle: {
      snippetSearchPaths: ['tests/dummy/app', 'app/styles']
    },

    coffeeOptions: {
      blueprints: false
    }
  }

  return ENV;
};
