import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-grid-item',
  layout,
  styles,
  localClassNames: 'grid__item',
  localClassNameBindings: ['_xsClass', '_smClass', '_mdClass', '_lgClass'],

  // @public
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',

  _xsClass: computed( 'xs', function() {
    const xs = get(this, 'xs');
    const cls = (xs && xs !== '') ? `xs-${xs}` : '';

    return cls;
  }),

  _smClass: computed( 'sm', function() {
    const sm = get(this, 'sm');
    const cls = (sm && sm !== '') ? `sm-${sm}` : '';

    return cls;
  }),

  _mdClass: computed( 'md', function() {
    const md = get(this, 'md');
    const cls = (md && md !== '') ? `md-${md}` : '';

    return cls;
  }),

  _lgClass: computed( 'lg', function() {
    const lg = get(this, 'lg');
    const cls = (lg && lg !== '') ? `lg-${lg}` : '';

    return cls;
  }),

  _xlClass: computed( 'xl', function() {
    const xl = get(this, 'xl');
    const cls = (xl && xl !== '') ? `xl-${xl}` : '';

    return cls;
  }),

});
