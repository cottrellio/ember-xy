import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-section',
  layout,
  styles,
  localClassNames: ['xy-section'],
  localClassNameBindings: ['paddingClass', 'marginClass'],

  padding: '',
  margin: '',

  paddingClass: computed('padding', function() {
    const padding = get(this, 'padding').split(' ');
    let cls = '';

    if (padding.length === 4) {
      // left | top | right | bottom
      cls = `pad-l-${padding[0]} pad-t-${padding[1]} pad-r-${padding[2]} pad-b-${padding[3]}`;
    } else if (padding.length === 3) {
      // top | horizontal | bottom
      cls = `pad-t-${padding[0]} pad-l-${padding[1]} pad-r-${padding[1]} pad-b-${padding[2]}`;
    } else if (padding.length === 2) {
      // vertical | horizontal
      cls = `pad-t-${padding[0]} pad-b-${padding[0]} pad-l-${padding[1]} pad-r-${padding[1]}`;
    } else if (padding.length === 1) {
      // all
      cls = `pad-l-${padding[0]} pad-t-${padding[0]} pad-r-${padding[0]} pad-b-${padding[0]}`;
    }

    return cls;
  }),

  marginClass: computed('margin', function() {
    const margin = get(this, 'margin').split(' ');
    let cls = '';

    if (margin.length === 4) {
      // left | top | right | bottom
      cls = `mar-l-${margin[0]} mar-t-${margin[1]} mar-r-${margin[2]} mar-b-${margin[3]}`;
    } else if (margin.length === 3) {
      // top | horizontal | bottom
      cls = `mar-t-${margin[0]} mar-l-${margin[1]} mar-r-${margin[1]} mar-b-${margin[2]}`;
    } else if (margin.length === 2) {
      // vertical | horizontal
      cls = `mar-t-${margin[0]} mar-b-${margin[0]} mar-l-${margin[1]} mar-r-${margin[1]}`;
    } else if (margin.length === 1) {
      // all
      cls = `mar-l-${margin[0]} mar-t-${margin[0]} mar-r-${margin[0]} mar-b-${margin[0]}`;
    }

    return cls;
  }),

});
