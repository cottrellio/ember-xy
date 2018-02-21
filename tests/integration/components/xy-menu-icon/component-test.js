import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('xy-menu-icon', 'Integration | Component | xy menu icon', {
  integration: true,
});

test('it renders', function(assert) {
  this.render(hbs`{{xy-menu-icon}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it toggles local-class `open` on click', function(assert) {
  // Set local styles.
  this.set('__styles__', {
    open: '--open',
  });

  // Render component.
  this.render(hbs`{{xy-menu-icon __styles__=__styles__}}`);

  // Click component to open.
  this.$('.xy-menu-icon').click();

  // Ensure `--open` is there.
  assert.ok(this.$('.xy-menu-icon').hasClass('--open'));

  // Click component to close.
  this.$('.xy-menu-icon').click();

  // Ensure `--open` is not there.
  assert.ok(!this.$('.xy-menu-icon').hasClass('--open'));
});
