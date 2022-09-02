import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | info', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
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
        address: 'Bosnia and Herzegovina, Sarajevo',
      },
    });

    await render(hbs`<Info @data={{this.data.info}}/>`);

    assert.dom('[data-test-info-name]').hasText('Ajdin Lojić');
  });
});
