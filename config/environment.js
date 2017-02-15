/* eslint-env node */
'use strict';

module.exports = function(environment) {
  const ENV = {
    environment,
    modulePrefix: 'styleguide',
    freestyle: {
      snippetSearchPaths: ['tests/dummy/app', 'app/styles']
    }
  }



  return ENV;
};
