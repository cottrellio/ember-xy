import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';

export default Mixin.create({

  localClassNameBindings: ['paddingClass', 'marginClass'],

  padding: '',
  margin: '',

  paddingClass: computed('padding', function() {
    const padding = get(this, 'padding').split(' ');

    return this._computeClasses('pad', padding);
  }),

  marginClass: computed('margin', function() {
    const margin = get(this, 'margin').split(' ');

    return this._computeClasses('mar', margin);
  }),

  /**
   * Compute the classes for left, top, right, and bottom using the inputs.
   * The inputs defer to CSS property patterns.
   *
   * @param {Array} inputs - List of sizes (xs, sm, md, lg, xl).
   * @return {String} cls - Space delimited string of classes.
   */
  _computeClasses(prefix = '', inputs = []) {
    let cls = '';

    switch (inputs.length) {
      case 4:
        // left | top | right | bottom
        cls = `${prefix}-l-${inputs[0]} ${prefix}-t-${inputs[1]} ${prefix}-r-${inputs[2]} ${prefix}-b-${inputs[3]}`;
        break;
      case 3:
        // top | horizontal | bottom
        cls = `${prefix}-t-${inputs[0]} ${prefix}-l-${inputs[1]} ${prefix}-r-${inputs[1]} ${prefix}-b-${inputs[2]}`;
        break;
      case 2:
        // vertical | horizontal
        cls = `${prefix}-t-${inputs[0]} ${prefix}-b-${inputs[0]} ${prefix}-l-${inputs[1]} ${prefix}-r-${inputs[1]}`;
        break;
      case 1:
        // all
        cls = `${prefix}-l-${inputs[0]} ${prefix}-t-${inputs[0]} ${prefix}-r-${inputs[0]} ${prefix}-b-${inputs[0]}`;
        break;
      default:
        // default
        cls = '';
        break;
    }

    return cls;
  },

});
