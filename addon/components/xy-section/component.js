import Component from '@ember/component';
import PaddingMarginMixin from 'ember-xy/mixins/padding-margin';
import layout from './template';
import styles from './styles';

/**
 * `xy-section` is a structural component used to easily add padding and/ or margin
 * to the enclosed section.
 *
 * Demo:
 * ```
 * {{#xy-section padding="none md" margin="xs none none none"}}
 *   ...
 * {{/xy-section}}
 * ```
 *
 * Usage:
 * @attr padding {String} - Accepts size args (xs, sm, md, lg, xl) for the following
 *                          patterns:
 *                                    left | top | right | bottom
 *                                    top | horizontal | bottom
 *                                    vertical | horizontal
 *                                    all
 *
 * @attr margin {String} - Accepts size args (xs, sm, md, lg, xl) for the following
 *                         patterns:
 *                                    left | top | right | bottom
 *                                    top | horizontal | bottom
 *                                    vertical | horizontal
 *                                    all
 */
export default Component.extend(PaddingMarginMixin, {

  tagName: 'xy-section',
  layout,
  styles,
  localClassNames: ['xy-section'],

});
