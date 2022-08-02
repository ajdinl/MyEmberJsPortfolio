import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | personal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Personal />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Personal>
        template block text
      </Personal>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
