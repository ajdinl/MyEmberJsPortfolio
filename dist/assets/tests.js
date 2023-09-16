'use strict';

define("my-portfolio/tests/acceptance/index-test", ["qunit", "@ember/test-helpers", "my-portfolio/tests/helpers"], function (_qunit, _testHelpers, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"my-portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | index', function (hooks) {
    (0, _helpers.setupApplicationTest)(hooks);
    (0, _qunit.test)('it should be able to toggle theme and details', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
      await (0, _testHelpers.click)('[data-test-theme-toggle]');
      assert.dom('[data-test-theme-icon]').hasClass('text-yellow-500');
      await (0, _testHelpers.click)('[data-test-theme-toggle]');
      assert.dom('[data-test-theme-icon]').hasClass('text-black');
      await (0, _testHelpers.click)('[data-test-collapse-toggle]');
      assert.dom('[data-test-collapse-details]').hasText('Coordinating and performing administrative tasks');
      await (0, _testHelpers.click)('[data-test-collapse-toggle]');
      assert.dom('[data-test-collapse-toggle]').hasText('...');
    });
  });
});
define("my-portfolio/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("my-portfolio/tests/integration/components/button-test", ["qunit", "my-portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"my-portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | button', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      this.set('data', {
        isDark: false,
        toggleTheme: () => {
          this.data.isDark = !this.data.isDark;
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Button @isDark={{this.data.isDark}} @toggleTheme={{this.data.toggleTheme}} />
      */
      {
        "id": "xbHAbby4",
        "block": "[[[8,[39,0],null,[[\"@isDark\",\"@toggleTheme\"],[[30,0,[\"data\",\"isDark\"]],[30,0,[\"data\",\"toggleTheme\"]]]],null]],[],false,[\"button\"]]",
        "moduleName": "/Users/ajdinlojic/Desktop/my code/ember/my-portfolio/my-portfolio/tests/integration/components/button-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Change theme to:');
    });
  });
});
define("my-portfolio/tests/integration/components/career-test", ["qunit", "my-portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"my-portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | career', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      this.set('data', {
        career: {
          employer1: {
            headline: 'Front-end developer',
            employer: 'Experfy',
            period: 'Feb 2022 to present',
            obligations: ['Writing well designed, testable, efficient code by using best software development practices', 'Creating website layout/user interfaces by using standard HTML/CSS practices', 'Integrating data from various back-end services and databases']
          },
          employer2: {
            headline: 'Service Technician',
            employer: 'Xenon-forte d.o.o.',
            period: 'Jan 2021 to Nov 2021',
            obligations: ['Troubleshooting hardware and software', 'Printer and computer diagnostic and service', 'Installation and configuration of print / scan equipment, computers and more']
          },
          employer3: {
            headline: 'Administrative and technical assistant',
            employer: 'Accounting d.o.o.',
            period: 'Jan 2015 to Dec 2020',
            obligations: ['Coordinating and performing administrative tasks', 'Provide operational support to the team', 'Creating and posting documentation, keeping a budget and cash register table']
          }
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Career @data={{this.data}}/>
      */
      {
        "id": "iJkYJ8XD",
        "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"data\"]]]],null]],[],false,[\"career\"]]",
        "moduleName": "/Users/ajdinlojic/Desktop/my code/ember/my-portfolio/my-portfolio/tests/integration/components/career-test.js",
        "isStrictMode": false
      }));
      assert.dom('[data-test-employer-name]').hasText('Experfy');
    });
  });
});
define("my-portfolio/tests/integration/components/info-test", ["qunit", "my-portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"my-portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | info', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      this.set('data', {
        info: {
          fullName: 'Ajdin Lojić',
          description: 'Web developer',
          cell: '+38761811375',
          git: 'https://github.com/ajdinl',
          website: 'https://ajdinlojic.vercel.app/',
          email: 'ajdinl@live.com',
          linkedin: '@ajdinlojic',
          linkedinLink: 'https://www.linkedin.com/in/ajdin-lojic/',
          address: 'Bosnia and Herzegovina, Sarajevo'
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Info @data={{this.data.info}}/>
      */
      {
        "id": "w3oVTNVG",
        "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"data\",\"info\"]]]],null]],[],false,[\"info\"]]",
        "moduleName": "/Users/ajdinlojic/Desktop/my code/ember/my-portfolio/my-portfolio/tests/integration/components/info-test.js",
        "isStrictMode": false
      }));
      assert.dom('[data-test-info-name]').hasText('Ajdin Lojić');
    });
  });
});
define("my-portfolio/tests/integration/components/personal-test", ["qunit", "my-portfolio/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"my-portfolio/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | personal', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      this.set('data', {
        personal: {
          profile: 'I am a web developer with robust problem-solving skills. Self-taught\n\t\t\t\t\tin React and Node js, with a desire for constant learning and problem-\n\t\t\t\t\tsolving.',
          languages: 'JavaScript, HTML/CSS',
          more: 'EmberJS, Ember-Data, React, Next, React Router, Redux/Recoil, Node, Express, Mongoose(MongoDB)',
          other: 'Bootstrap, Tailwind CSS, Adobe Photoshop, Linux, Visual Studio Code',
          personalities: ['Accuracy', 'Organization', 'Creativity', 'Communication'],
          hobbies: ['Motorcycling', 'Skiing', 'CryptoCurrency']
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Personal @data={{this.data}}/>
      */
      {
        "id": "wFLCv2Np",
        "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"data\"]]]],null]],[],false,[\"personal\"]]",
        "moduleName": "/Users/ajdinlojic/Desktop/my code/ember/my-portfolio/my-portfolio/tests/integration/components/personal-test.js",
        "isStrictMode": false
      }));
      assert.dom('[data-test-profile-text]').hasText('I am a web developer with robust problem-solving skills. Self-taught\n\t\t\t\t\tin React and Node js, with a desire for constant learning and problem-\n\t\t\t\t\tsolving.');
    });
  });
});
define("my-portfolio/tests/test-helper", ["my-portfolio/app", "my-portfolio/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"my-portfolio/app",0,"my-portfolio/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("my-portfolio/tests/unit/controllers/index-test", ["qunit", "my-portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"my-portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("my-portfolio/tests/unit/routes/index-test", ["qunit", "my-portfolio/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"my-portfolio/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('my-portfolio/config/environment', [], function() {
  var prefix = 'my-portfolio';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('my-portfolio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
