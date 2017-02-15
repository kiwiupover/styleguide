/* eslint-env node */

const path = require('path');
const Funnel = require('broccoli-funnel');

const mergeTrees = require('ember-cli/lib/broccoli/merge-trees');
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'styleguide',
  lazyLoading: true,

  freestyle: {
    snippetSearchPaths: ['tests/dummy/app']
  }
});
