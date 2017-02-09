/* eslint-env node */

const path = require('path');
const Funnel = require('broccoli-funnel');

const mergeTrees = require('ember-cli/lib/broccoli/merge-trees');
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'styleguide',
  lazyLoading: true

  // included: function(app) {
  //   this._super.included.apply(this, arguments);
  //
  //   var bowerDirectory = this.project.bowerDirectory;
  //   var importContext;
  //
  //   if (this.import) {  // support for ember-cli >= 2.7
  //     importContext = this;
  //   } else { // addon support for ember-cli < 2.7
  //     importContext = this._findHostForLegacyEmberCLI();
  //   }
  //
  //   var env = app.env;
  //   var config = this.project.config(env || 'development');
  //   var excludeHighlightJs = config.remarkable.excludeHighlightJs;
  //
  //   importContext.import(path.join(this.project.root, bowerDirectory, '/remarkable/dist/remarkable.js'));
  //   if (!excludeHighlightJs) {
  //     importContext.import(path.join(this.project.root, bowerDirectory, '/highlightjs/highlight.pack.js'));
  //   }
  //   importContext.import('vendor/ember-remarkable/shim.js', {
  //     type: 'vendor',
  //     exports: { 'remarkable': ['default'] }
  //   });
  // },
});
