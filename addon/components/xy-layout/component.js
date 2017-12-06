import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-layout',
  layout,
  styles,
  localClassNames: 'layout',
  localClassNameBindings: [
    'horizontal:horizontal',
    'vertical:vertical',
    'reverse:reverse',
    'inline:inline',
    'wrap:wrap',
    'wrapReverse:wrap-reverse',
    'start:start',
    'startJustified:start-justified',
    'center:center',
    'centerCenter:center-center',
    'centerJustified:center-justified',
    'end:end',
    'endJustified:end-justified',
    'aroundJustified:around-justified',
    'justified:justified',
    'flex:flex',
    'xsClass',
    'smClass',
    'mdClass',
    'lgClass',
    'xlClass',
  ],

  horizontal: true,
  vertical: false,
  reverse: false,
  inline: false,
  wrap: false,
  wrapReverse: false,
  start: false,
  startJustified: false,
  center: false,
  centerCenter: false,
  centerJustified: false,
  end: false,
  endJustified: false,
  aroundJustified: false,
  justified: false,
  flex: false,

  xsClass: computed('xs', function() {
    const xs = get(this, 'xs');

    return (xs) ? `xs-${xs}` : '';
  }),

  smClass: computed('sm', function() {
    const sm = get(this, 'sm');

    return (sm) ? `sm-${sm}` : '';
  }),

  mdClass: computed('md', function() {
    const md = get(this, 'md');

    return (md) ? `md-${md}` : '';
  }),

  lgClass: computed('lg', function() {
    const lg = get(this, 'lg');

    return (lg) ? `lg-${lg}` : '';
  }),

  xlClass: computed('xl', function() {
    const xl = get(this, 'xl');

    return (xl) ? `xl-${xl}` : '';
  }),

});
