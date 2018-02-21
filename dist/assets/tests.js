'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/controller.js should pass ESLint\n\n');
  });

  QUnit.test('application/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-drawer/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-drawer/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-grid-item/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-grid-item/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-grid/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-grid/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-icon/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-icon/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-layout/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-layout/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-menu-icon/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-menu-icon/controller.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-menu-icon/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-menu-icon/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-part/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-part/route.js should pass ESLint\n\n');
  });

  QUnit.test('comps/xy-section/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'comps/xy-section/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/xy-drawer/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-drawer', 'Integration | Component | xy drawer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "rlty12wG",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-drawer\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "PbpbVWYC",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-drawer\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-grid-item/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-grid-item', 'Integration | Component | xy grid item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7svaJ+yz",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-grid-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "EUdUnyiq",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-grid-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-grid/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-grid', 'Integration | Component | xy grid', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "sTcsW5Z1",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-grid\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "/XRQl8Jx",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-grid\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-icon/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-icon', 'Integration | Component | xy icon', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "i9jkFTUj",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-icon\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "3zk6iNkE",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-icon\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-layout/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-layout', 'Integration | Component | xy layout', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "C2ax91xA",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-layout\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "iwgaVVJr",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-layout\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-menu-icon/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-menu-icon', 'Integration | Component | xy menu icon', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "qy2ZsNHR",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-menu-icon\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');
  });

  (0, _emberQunit.test)('it toggles local-class `open` on click', function (assert) {
    // Set local styles.
    this.set('__styles__', {
      open: '--open'
    });

    // Render component.
    this.render(Ember.HTMLBars.template({
      "id": "NoeZp0cJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-menu-icon\",null,[[\"__styles__\"],[[20,[\"__styles__\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    // Click component to open.
    this.$('.xy-menu-icon').click();

    // Ensure `--open` is there.
    assert.ok(this.$('.xy-menu-icon').hasClass('--open'));

    // Click component to close.
    this.$('.xy-menu-icon').click();

    // Ensure `--open` is not there.
    assert.ok(!this.$('.xy-menu-icon').hasClass('--open'));
  });
});
define('dummy/tests/integration/components/xy-nav-item/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-nav-item', 'Integration | Component | xy nav item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "n310Wf6O",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-nav-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "2uA2pn3A",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-nav-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-part/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('xy-part', 'Integration | Component | xy part', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QCU/R03n",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-part\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "+EUuB1c0",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"xy-part\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/xy-section/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var A = Ember.A;
  var $ = Ember.$;


  (0, _emberQunit.moduleForComponent)('xy-section', 'Integration | Component | xy section', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "o2hkRjoK",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"xy-section\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

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

  (0, _emberQunit.test)('padding xs left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7JUxnuhN",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xs xs xs xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xs', 'pad-t-xs', 'pad-r-xs', 'pad-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding sm left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "3wDGnOV0",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"sm sm sm sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-sm', 'pad-t-sm', 'pad-r-sm', 'pad-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding md left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "1rP0O/n1",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"md md md md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-md', 'pad-t-md', 'pad-r-md', 'pad-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding lg left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "TMfWb3zT",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"lg lg lg lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-lg', 'pad-t-lg', 'pad-r-lg', 'pad-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding xl left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "eNfuhCSy",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xl xl xl xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xl', 'pad-t-xl', 'pad-r-xl', 'pad-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding none left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "kZ9dZLpJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"none none none none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-none', 'pad-t-none', 'pad-r-none', 'pad-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  /* -------------------------------------------------------------------------- *\
   * top | horizontal | bottom
  \* -------------------------------------------------------------------------- */

  (0, _emberQunit.test)('padding xs top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "b7+pYLvp",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xs xs xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xs', 'pad-t-xs', 'pad-r-xs', 'pad-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding sm top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Pq4a+5eZ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"sm sm sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-sm', 'pad-t-sm', 'pad-r-sm', 'pad-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding md top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "/b8zTbgq",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"md md md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-md', 'pad-t-md', 'pad-r-md', 'pad-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding lg top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "o0NdBsRO",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"lg lg lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-lg', 'pad-t-lg', 'pad-r-lg', 'pad-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding xl top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "GRQ9R19w",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xl xl xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xl', 'pad-t-xl', 'pad-r-xl', 'pad-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding none top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uHX8qaji",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"none none none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-none', 'pad-t-none', 'pad-r-none', 'pad-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  /* -------------------------------------------------------------------------- *\
   * vertical | horizontal
  \* -------------------------------------------------------------------------- */

  (0, _emberQunit.test)('padding xs vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "q9CJoaBm",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xs xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xs', 'pad-t-xs', 'pad-r-xs', 'pad-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding sm vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "M4vNkf3i",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"sm sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-sm', 'pad-t-sm', 'pad-r-sm', 'pad-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding md vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "v+UY8c7h",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"md md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-md', 'pad-t-md', 'pad-r-md', 'pad-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding lg vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "TyUZBp4Z",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"lg lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-lg', 'pad-t-lg', 'pad-r-lg', 'pad-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding xl vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "5nGRL2YH",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xl xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xl', 'pad-t-xl', 'pad-r-xl', 'pad-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding none vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "qknaSdYy",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"none none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-none', 'pad-t-none', 'pad-r-none', 'pad-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  /* -------------------------------------------------------------------------- *\
   * all
  \* -------------------------------------------------------------------------- */

  (0, _emberQunit.test)('padding xs all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+zCKN/E0",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xs', 'pad-t-xs', 'pad-r-xs', 'pad-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding sm all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "eQUGnyM3",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-sm', 'pad-t-sm', 'pad-r-sm', 'pad-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding md all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "FC9cPUfZ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-md', 'pad-t-md', 'pad-r-md', 'pad-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding lg vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7sh2nnOz",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-lg', 'pad-t-lg', 'pad-r-lg', 'pad-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding xl all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Pem4Mzqi",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-xl', 'pad-t-xl', 'pad-r-xl', 'pad-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('padding none all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "njaSjwLS",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"padding\"],[\"none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['pad-l-none', 'pad-t-none', 'pad-r-none', 'pad-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
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

  (0, _emberQunit.test)('margin xs left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "BQrN/Cco",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xs xs xs xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xs', 'mar-t-xs', 'mar-r-xs', 'mar-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin sm left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "I5YkVIoY",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"sm sm sm sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-sm', 'mar-t-sm', 'mar-r-sm', 'mar-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin md left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "x5/NoGPE",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"md md md md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-md', 'mar-t-md', 'mar-r-md', 'mar-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin lg left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "j8rErdPw",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"lg lg lg lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-lg', 'mar-t-lg', 'mar-r-lg', 'mar-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin xl left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Z1FPIF1X",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xl xl xl xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xl', 'mar-t-xl', 'mar-r-xl', 'mar-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin none left | top | right | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "NzijP7u6",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"none none none none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-none', 'mar-t-none', 'mar-r-none', 'mar-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  /* -------------------------------------------------------------------------- *\
   * top | horizontal | bottom
  \* -------------------------------------------------------------------------- */

  (0, _emberQunit.test)('margin xs top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "fRe8CRRA",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xs xs xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xs', 'mar-t-xs', 'mar-r-xs', 'mar-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin sm top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "8D9uv/op",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"sm sm sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-sm', 'mar-t-sm', 'mar-r-sm', 'mar-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin md top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "UnT3hmiP",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"md md md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-md', 'mar-t-md', 'mar-r-md', 'mar-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin lg top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "kD+EImla",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"lg lg lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-lg', 'mar-t-lg', 'mar-r-lg', 'mar-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin xl top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "4crFANVc",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xl xl xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xl', 'mar-t-xl', 'mar-r-xl', 'mar-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin none top | horizontal | bottom works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uIYJ3yQW",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"none none none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-none', 'mar-t-none', 'mar-r-none', 'mar-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  /* -------------------------------------------------------------------------- *\
   * vertical | horizontal
  \* -------------------------------------------------------------------------- */

  (0, _emberQunit.test)('margin xs vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uLiRfq0F",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xs xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xs', 'mar-t-xs', 'mar-r-xs', 'mar-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin sm vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+8SqmLlx",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"sm sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-sm', 'mar-t-sm', 'mar-r-sm', 'mar-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin md vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "KBx1KbDj",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"md md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-md', 'mar-t-md', 'mar-r-md', 'mar-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin lg vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "O0gG/s3K",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"lg lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-lg', 'mar-t-lg', 'mar-r-lg', 'mar-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin xl vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "y7LQEKjS",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xl xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xl', 'mar-t-xl', 'mar-r-xl', 'mar-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin none vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "lz6BHdht",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"none none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-none', 'mar-t-none', 'mar-r-none', 'mar-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  /* -------------------------------------------------------------------------- *\
   * all
  \* -------------------------------------------------------------------------- */

  (0, _emberQunit.test)('margin xs all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "YT7+/q1q",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xs\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xs', 'mar-t-xs', 'mar-r-xs', 'mar-b-xs'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin sm all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Cat2Yj93",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"sm\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-sm', 'mar-t-sm', 'mar-r-sm', 'mar-b-sm'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin md all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "9QNv7tvo",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"md\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-md', 'mar-t-md', 'mar-r-md', 'mar-b-md'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin lg vertical | horizontal works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "WMdF9T+g",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"lg\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-lg', 'mar-t-lg', 'mar-r-lg', 'mar-b-lg'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin xl all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "C3O4W3T4",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"xl\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-xl', 'mar-t-xl', 'mar-r-xl', 'mar-b-xl'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });

  (0, _emberQunit.test)('margin none all works', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "0+QsOkEi",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"xy-section\",null,[[\"margin\"],[\"none\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var actual = A($('xy-section')[0].className.split(' '));
    var expected = ['mar-l-none', 'mar-t-none', 'mar-r-none', 'mar-b-none'];

    expected.forEach(function (e) {
      assert.ok(actual.any(function (a) {
        return a.includes(e);
      }), e + ' is not found');
    });
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-drawer/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-drawer/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-grid-item/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-grid-item/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-grid/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-grid/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-icon/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-icon/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-layout/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-layout/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-menu-icon/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-menu-icon/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-nav-item/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-nav-item/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-part/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-part/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/xy-section/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/xy-section/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/padding-margin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/padding-margin-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/unit/mixins/padding-margin-test', ['ember-xy/mixins/padding-margin', 'qunit'], function (_paddingMargin, _qunit) {
  'use strict';

  var EmberObject = Ember.Object;


  (0, _qunit.module)('Unit | Mixin | padding margin');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var PaddingMarginObject = EmberObject.extend(_paddingMargin.default);
    var subject = PaddingMarginObject.create();
    assert.ok(subject);
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
