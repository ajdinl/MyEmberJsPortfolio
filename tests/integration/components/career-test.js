import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | career', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data', {
      career: {
        employer1: {
          headline: 'Front-end developer',
          employer: 'Experfy',
          period: 'Feb 2022 to present',
          obligations: [
            'Writing well designed, testable, efficient code by using best software development practices',
            'Creating website layout/user interfaces by using standard HTML/CSS practices',
            'Integrating data from various back-end services and databases',
          ],
        },
        employer2: {
          headline: 'Service Technician',
          employer: 'Xenon-forte d.o.o.',
          period: 'Jan 2021 to Nov 2021',
          obligations: [
            'Troubleshooting hardware and software',
            'Printer and computer diagnostic and service',
            'Installation and configuration of print / scan equipment, computers and more',
          ],
        },
        employer3: {
          headline: 'Administrative and technical assistant',
          employer: 'Accounting d.o.o.',
          period: 'Jan 2015 to Dec 2020',
          obligations: [
            'Coordinating and performing administrative tasks',
            'Provide operational support to the team',
            'Creating and posting documentation, keeping a budget and cash register table',
          ],
        },
      },
    });

    await render(hbs`<Career @data={{this.data}}/>`);
    assert.dom('[data-test-employer-name]').hasText('Experfy');
  });
});
