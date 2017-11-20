import Component from '@ember/component';
import layout from './template';
import styles from './styles';
import { computed, get } from '@ember/object';

export default Component.extend({

  tagName: 'xy-part',
  layout,
  styles,
  localClassNames: ['xy-part'],
  localClassNameBindings: ['isSm:sm', 'isMd:md', 'isLg:lg', 'isXl:xl', 'code:code', 'clickable:isClickable'],

  size: '',
  code: false,
  clickable: false,

  isSm: computed('size', function() {
    const size = get(this, 'size');

    return size === 'sm';
  }),

  isMd: computed('size', function() {
    const size = get(this, 'size');

    return size === 'md';
  }),

  isLg: computed('size', function() {
    const size = get(this, 'size');

    return size === 'lg';
  }),

  isXl: computed('size', function() {
    const size = get(this, 'size');

    return size === 'xl';
  }),

});
