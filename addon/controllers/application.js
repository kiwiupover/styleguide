import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { computed, inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),
  showCode: computed.alias('emberFreestyle.showCode'),

  /* BEGIN-FREESTYLE-USAGE fpi:notes
### A few notes regarding freestyle-palette-item

- Accepts a color object
- Looks very nice

And another thing...

###### Markdown note demonstrating prettified code

```
import Ember from 'ember';

export default Ember.Component.extend({
  // ...
  color: {
    name: 'amber',
    base: '#ffc107'
  }
  // ...
});
```
  END-FREESTYLE-USAGE */

  colorPalette: {
    primary: {
      name: 'Kelly Green',
      base: '#428627',
    },
    accent: {
      name: 'Moss Green',
      base: '#D7EDCE'
    },
    secondary: {
      name: 'Peach',
      base: '#E4AB67'
    },
    foreground: {
      name: 'Spindle',
      base: '#CEE0ED',
    },
    background: {
      name: 'Yellow 500',
      base: '#FFEB3B'
    },
    background: {
      name: 'Ryan Teal',
      base: '#1CCDC7'
    }
  },

  grayPalette: {
    primary: {
      name: 'White',
      base: '#FFFFFF',
    },
    accent: {
      name: 'Grey 50',
      base: '#FAFAFA'
    },
    secondary: {
      name: 'Grey 300',
      base: '#E0E0E0'
    },
    foreground: {
      name: 'Grey 600',
      base: '#757575',
    },
    background: {
      name: 'Grey 800',
      base: '#424242'
    },
    background: {
      name: 'Black 900',
      base: '#212121'
    }
  },

});
