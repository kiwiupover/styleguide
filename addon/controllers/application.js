import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { computed, inject, observer } = Ember;

export default FreestyleController.extend({

  store: inject.service(),
  emberFreestyle: inject.service(),
  showRental: null,
  showReview: null,
  showCode: computed.alias('emberFreestyle.showCode'),

  init() {
    this._super(...arguments);
    this._getShowRental();
    this._getReview();
  },

  colorPalette: {
    primary: {
      name: 'Kelly Green',
      base: '#428627',
      variable: '$primary-color'
    },
    accent: {
      name: 'Moss Green',
      base: '#D7EDCE',
      variable: '$green-color'
    },
    secondary: {
      name: 'Peach',
      base: '#E4AB67',
      variable: '$orange-color'
    },
    foreground: {
      name: 'Spindle',
      base: '#CEE0ED',
      variable: '$blue-color'
    },
    background: {
      name: 'Yellow 500',
      base: '#FFEB3B',
      variable: 'none'
    },
    backgrounddd: {
      name: 'Ryan Teal',
      base: '#1CCDC7',
      variable: '$ryans-color'
    }
  },

  grayPalette: {
    white: {
      name: 'White',
      base: '#FFFFFF',
      variable: '$white'
    },
    gray50: {
      name: 'Gray 50',
      base: '#FAFAFA',
      variable: '$gray50'

    },
    gray300: {
      name: 'Gray 300',
      base: '#E0E0E0',
      variable: '$gray300'
    },
    gray600: {
      name: 'Gray 600',
      base: '#757575',
      variable: '$gray600'
    },
    gray800: {
      name: 'Gray 800',
      base: '#424242',
      variable: '$gray800'
    },
    gray900: {
      name: 'Black 900',
      base: '#212121',
      variable: '$black'
    }
  },

  _getShowRental(){
    let filter = {
      full: true,
      limit: 1,
      near:"37.7749295,-122.41941550000001",
      offset:5,
      radius:50,
      sleeps:1
    };

    return this.get('store').query('rental', filter).then((data) => {
      return this.set('showRental', data.get('firstObject'));
    });
  },

  _getReview() {
    this.get('store').query('review', { rental_id: 2987 }).then((data) => {
      this.set('showReview', data.get('firstObject'));
    });
  }

});
