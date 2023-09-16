import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch(
      'https://my-json-server.typicode.com/ajdinl/PortfolioNextTailwind/db'
    );
    let data = await response.json();

    return {
      data,
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('data', model.data);
  }
}
