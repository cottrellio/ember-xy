import EmberObject from '@ember/object';
import PaddingMarginMixin from 'ember-xy/mixins/padding-margin';
import { module, test } from 'qunit';

module('Unit | Mixin | padding margin');

// Replace this with your real tests.
test('it works', function(assert) {
  let PaddingMarginObject = EmberObject.extend(PaddingMarginMixin);
  let subject = PaddingMarginObject.create();
  assert.ok(subject);
});
