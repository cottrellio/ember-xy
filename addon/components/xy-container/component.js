import Component from '@ember/component';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-container',
  layout,
  styles,
  localClassNameBindings: ['fluid:container-fluid:container'],

  fluid: false,

});
