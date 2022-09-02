import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-portfolio/tests/helpers';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('it should be able to toggle theme and details', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    await click('[data-test-theme-toggle]');
    assert.dom('[data-test-theme-icon]').hasClass('text-yellow-500');

    await click('[data-test-theme-toggle]');
    assert.dom('[data-test-theme-icon]').hasClass('text-black');

    await click('[data-test-collapse-toggle]');
    assert
      .dom('[data-test-collapse-details]')
      .hasText('Coordinating and performing administrative tasks');

    await click('[data-test-collapse-toggle]');
    assert.dom('[data-test-collapse-toggle]').hasText('...');
  });
});
