import Component from '@ember/component';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-row',
  layout,
  styles,
  localClassNames: ['row'],
  localClassNameBindings: ['reverse:reverse'],

  reverse: false,

});
