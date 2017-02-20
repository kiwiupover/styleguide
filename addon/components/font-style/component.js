import Component from 'ember-component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['fg-col-xs-12', 'FreestyleGuide-font-style-list'],

  name: '',
  text: ''
});
