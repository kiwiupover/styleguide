/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
    freestyle: {
      snippetSearchPaths: ['tests/dummy/app', 'app/styles']
    }
  });

  return app.toTree();
};
