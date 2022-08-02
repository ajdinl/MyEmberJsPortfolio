import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CareerComponent extends Component {
  @tracked showDetails = false;

  @action
  showDetailsToggle() {
    this.showDetails = !this.showDetails;
  }
}
