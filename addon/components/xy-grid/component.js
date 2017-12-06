import Component from '@ember/component';
import layout from './template';
import styles from './styles';

export default Component.extend({

  tagName: 'xy-grid',
  layout,
  styles,
  localClassNames: 'grid',
  localClassNameBindings: ['flex:grid--flex', 'flush:grid--flush', 'compact:grid--compact'],

  flex: false,
  flush: false,
  compact: false,

});
