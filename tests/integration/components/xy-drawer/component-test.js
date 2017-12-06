import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('xy-drawer', 'Integration | Component | xy drawer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-drawer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#xy-drawer}}
      template block text
    {{/xy-drawer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
