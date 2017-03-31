/* eslint-env node */

const path = require('path');
const Funnel = require('broccoli-funnel');

const MergeTrees = require('ember-cli/lib/broccoli/merge-trees');
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'styleguide',
  lazyLoading: false,

  included: function(app) {
    this._super.included(app);

    this.import('vendor/highlight.pack.js', {
      exports: {
        'highlight.js': [
          'default',
          'highlight',
          'highlightAuto',
          'highlightBlock'
        ]
      }
    });

    this.import('vendor/markdown-it.min.js');

    this.import('vendor/shims/highlight.js');
    this.import('vendor/shims/markdown-it.js');
  },

  treeForVendor() {
    var tree = this._super.treeForVendor.apply(this, arguments);

    let markdownItTree = new Funnel(path.join(this.project.root, 'node_modules', 'markdown-it', 'dist'), {
      files: ['markdown-it.min.js'],
    });

    let highlightTree = new Funnel(path.join(this.project.root, 'node_modules', 'highlightjs'), {
      files: ['highlight.pack.js'],
    });

    return new MergeTrees([tree, markdownItTree, highlightTree]);
  }
});
