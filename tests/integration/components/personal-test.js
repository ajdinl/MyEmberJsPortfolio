import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | personal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data', {
      personal: {
        profile:
          'I am a web developer with robust problem-solving skills. Self-taught\n\t\t\t\t\tin React and Node js, with a desire for constant learning and problem-\n\t\t\t\t\tsolving.',
        languages: 'JavaScript, HTML/CSS',
        more: 'EmberJS, Ember-Data, React, Next, React Router, Redux/Recoil, Node, Express, Mongoose(MongoDB)',
        other:
          'Bootstrap, Tailwind CSS, Adobe Photoshop, Linux, Visual Studio Code',
        personalities: [
          'Accuracy',
          'Organization',
          'Creativity',
          'Communication',
        ],
        hobbies: ['Motorcycling', 'Skiing', 'CryptoCurrency'],
      },
    });

    await render(hbs`<Personal @data={{this.data}}/>`);

    assert
      .dom('[data-test-profile-text]')
      .hasText(
        'I am a web developer with robust problem-solving skills. Self-taught\n\t\t\t\t\tin React and Node js, with a desire for constant learning and problem-\n\t\t\t\t\tsolving.'
      );
  });
});
