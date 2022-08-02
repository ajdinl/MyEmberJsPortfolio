import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | career', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Career />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Career>
        template block text
      </Career>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
