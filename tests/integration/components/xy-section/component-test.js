import { moduleForComponent, test } from 'ember-qunit';
import { A } from '@ember/array';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';

moduleForComponent('xy-section', 'Integration | Component | xy section', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section}}`);

  assert.equal(this.$().text().trim(), '');
});


/* -------------------------------------------------------------------------- *\
 *
 * PADDING
 *
\* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- *\
 * left | top | right | bottom
\* -------------------------------------------------------------------------- */

test('padding xs left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xs xs xs xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xs',
    'pad-t-xs',
    'pad-r-xs',
    'pad-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding sm left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="sm sm sm sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-sm',
    'pad-t-sm',
    'pad-r-sm',
    'pad-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding md left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="md md md md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-md',
    'pad-t-md',
    'pad-r-md',
    'pad-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding lg left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="lg lg lg lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-lg',
    'pad-t-lg',
    'pad-r-lg',
    'pad-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding xl left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xl xl xl xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xl',
    'pad-t-xl',
    'pad-r-xl',
    'pad-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding none left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="none none none none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-none',
    'pad-t-none',
    'pad-r-none',
    'pad-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

/* -------------------------------------------------------------------------- *\
 * top | horizontal | bottom
\* -------------------------------------------------------------------------- */

test('padding xs top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xs xs xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xs',
    'pad-t-xs',
    'pad-r-xs',
    'pad-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding sm top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="sm sm sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-sm',
    'pad-t-sm',
    'pad-r-sm',
    'pad-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding md top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="md md md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-md',
    'pad-t-md',
    'pad-r-md',
    'pad-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding lg top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="lg lg lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-lg',
    'pad-t-lg',
    'pad-r-lg',
    'pad-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding xl top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xl xl xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xl',
    'pad-t-xl',
    'pad-r-xl',
    'pad-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding none top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="none none none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-none',
    'pad-t-none',
    'pad-r-none',
    'pad-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

/* -------------------------------------------------------------------------- *\
 * vertical | horizontal
\* -------------------------------------------------------------------------- */

test('padding xs vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xs xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xs',
    'pad-t-xs',
    'pad-r-xs',
    'pad-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding sm vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="sm sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-sm',
    'pad-t-sm',
    'pad-r-sm',
    'pad-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding md vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="md md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-md',
    'pad-t-md',
    'pad-r-md',
    'pad-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding lg vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="lg lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-lg',
    'pad-t-lg',
    'pad-r-lg',
    'pad-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding xl vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xl xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xl',
    'pad-t-xl',
    'pad-r-xl',
    'pad-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding none vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="none none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-none',
    'pad-t-none',
    'pad-r-none',
    'pad-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

/* -------------------------------------------------------------------------- *\
 * all
\* -------------------------------------------------------------------------- */

test('padding xs all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xs',
    'pad-t-xs',
    'pad-r-xs',
    'pad-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding sm all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-sm',
    'pad-t-sm',
    'pad-r-sm',
    'pad-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding md all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-md',
    'pad-t-md',
    'pad-r-md',
    'pad-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding lg vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-lg',
    'pad-t-lg',
    'pad-r-lg',
    'pad-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding xl all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-xl',
    'pad-t-xl',
    'pad-r-xl',
    'pad-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('padding none all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section padding="none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'pad-l-none',
    'pad-t-none',
    'pad-r-none',
    'pad-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});


/* -------------------------------------------------------------------------- *\
 *
 * MARGIN
 *
\* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- *\
 * left | top | right | bottom
\* -------------------------------------------------------------------------- */

test('margin xs left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xs xs xs xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xs',
    'mar-t-xs',
    'mar-r-xs',
    'mar-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin sm left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="sm sm sm sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-sm',
    'mar-t-sm',
    'mar-r-sm',
    'mar-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin md left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="md md md md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-md',
    'mar-t-md',
    'mar-r-md',
    'mar-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin lg left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="lg lg lg lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-lg',
    'mar-t-lg',
    'mar-r-lg',
    'mar-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin xl left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xl xl xl xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xl',
    'mar-t-xl',
    'mar-r-xl',
    'mar-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin none left | top | right | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="none none none none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-none',
    'mar-t-none',
    'mar-r-none',
    'mar-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

/* -------------------------------------------------------------------------- *\
 * top | horizontal | bottom
\* -------------------------------------------------------------------------- */

test('margin xs top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xs xs xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xs',
    'mar-t-xs',
    'mar-r-xs',
    'mar-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin sm top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="sm sm sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-sm',
    'mar-t-sm',
    'mar-r-sm',
    'mar-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin md top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="md md md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-md',
    'mar-t-md',
    'mar-r-md',
    'mar-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin lg top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="lg lg lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-lg',
    'mar-t-lg',
    'mar-r-lg',
    'mar-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin xl top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xl xl xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xl',
    'mar-t-xl',
    'mar-r-xl',
    'mar-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin none top | horizontal | bottom works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="none none none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-none',
    'mar-t-none',
    'mar-r-none',
    'mar-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

/* -------------------------------------------------------------------------- *\
 * vertical | horizontal
\* -------------------------------------------------------------------------- */

test('margin xs vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xs xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xs',
    'mar-t-xs',
    'mar-r-xs',
    'mar-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin sm vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="sm sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-sm',
    'mar-t-sm',
    'mar-r-sm',
    'mar-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin md vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="md md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-md',
    'mar-t-md',
    'mar-r-md',
    'mar-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin lg vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="lg lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-lg',
    'mar-t-lg',
    'mar-r-lg',
    'mar-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin xl vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xl xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xl',
    'mar-t-xl',
    'mar-r-xl',
    'mar-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin none vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="none none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-none',
    'mar-t-none',
    'mar-r-none',
    'mar-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

/* -------------------------------------------------------------------------- *\
 * all
\* -------------------------------------------------------------------------- */

test('margin xs all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xs"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xs',
    'mar-t-xs',
    'mar-r-xs',
    'mar-b-xs',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin sm all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="sm"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-sm',
    'mar-t-sm',
    'mar-r-sm',
    'mar-b-sm',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin md all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="md"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-md',
    'mar-t-md',
    'mar-r-md',
    'mar-b-md',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin lg vertical | horizontal works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="lg"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-lg',
    'mar-t-lg',
    'mar-r-lg',
    'mar-b-lg',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin xl all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="xl"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-xl',
    'mar-t-xl',
    'mar-r-xl',
    'mar-b-xl',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});

test('margin none all works', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{xy-section margin="none"}}`);
  let actual = A($('xy-section')[0].className.split(' '));
  const expected = [
    'mar-l-none',
    'mar-t-none',
    'mar-r-none',
    'mar-b-none',
  ];

  expected.forEach(e => {
    assert.ok(actual.any((a) => a.includes(e)), `${e} is not found`);
  });
});
