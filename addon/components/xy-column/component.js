import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-column',
  layout,
  styles,
  localClassNames: 'col',
  localClassNameBindings: ['reverse:reverse', 'xsClass', 'smClass', 'mdClass', 'lgClass'],

  reverse: false,

  xsClass: computed('xs', function() {
    const xs = get(this, 'xs');
    const cls = (xs) ? `col-xs-${xs}` : '';

    return cls;
  }),

  smClass: computed('sm', function() {
    const sm = get(this, 'sm');
    const cls = (sm) ? `col-sm-${sm}` : '';

    return cls;
  }),

  mdClass: computed('md', function() {
    const md = get(this, 'md');
    const cls = (md) ? `col-md-${md}` : '';

    return cls;
  }),

  lgClass: computed('lg', function() {
    const lg = get(this, 'lg');
    const cls = (lg) ? `col-lg-${lg}` : '';

    return cls;
  }),

  xlClass: computed('xl', function() {
    const xl = get(this, 'xl');
    const cls = (xl) ? `col-xl-${xl}` : '';

    return cls;
  }),

});
