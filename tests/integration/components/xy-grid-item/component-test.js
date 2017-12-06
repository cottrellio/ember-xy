import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('xy-grid-item', 'Integration | Component | xy grid item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-grid-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#xy-grid-item}}
      template block text
    {{/xy-grid-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
