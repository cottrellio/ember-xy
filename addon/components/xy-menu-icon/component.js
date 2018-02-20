import Component from '@ember/component';
import layout from './template';
import styles from './styles';

export default Component.extend({

  layout,
  styles,
  localClassNames: 'icon',
  localClassNameBindings: 'isOpen:open',

  isOpen: false,

  click() {
    this.toggleProperty('isOpen');
  },

});
