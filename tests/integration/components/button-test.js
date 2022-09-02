import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-portfolio/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data', {
      isDark: false,
      toggleTheme: () => {
        this.data.isDark = !this.data.isDark;
      },
    });

    await render(
      hbs`<Button @isDark={{this.data.isDark}} @toggleTheme={{this.data.toggleTheme}} />`
    );

    assert.dom(this.element).hasText('Change theme to:');
  });
});
