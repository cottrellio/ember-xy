import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import { computed, get, getWithDefault } from '@ember/object';
import layout from './template';
import styles from './styles';

/**
 * @class XyIconComponent
 */
const XyIconComponent = Component.extend({

  tagName: 'xy-icon',
  layout,
  styles,
  localClassNames: ['xy-icon', 'material-icons'],
  localClassNameBindings: ['spin:spin', 'reverse:reverse'],
  attributeBindings: ['aria-label', 'title', 'sizeStyle:style', 'iconClass:md-font-icon'],

  icon: '',
  spin: false,
  reverse: false,

  'aria-label': computed.reads('iconClass'),

  iconClass: computed('icon', 'positionalIcon', function() {
    const icon = getWithDefault(this, 'positionalIcon', get(this, 'icon'));

    return icon;
  }),

  sizeStyle: computed('size', function() {
    const size = get(this, 'size');

    if (size) {
      return htmlSafe(`height: ${size}px; min-height: ${size}px; min-width: ${size}px; font-size: ${size}px; line-height: ${size}px;`);
    }
  }),

});

XyIconComponent.reopenClass({
  positionalParams: ['positionalIcon'],
});

export default XyIconComponent;
