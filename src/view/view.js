import {createElement} from '../render.js';

export default class View {
  _element = null;

  getTemplate() {
    throw new Error('Abstract method must be implemented');
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
