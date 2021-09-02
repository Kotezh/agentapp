export default class Element {
  constructor(placeTemplate, result) {
    this._placeTemplate = placeTemplate;
    this._result = result;
  }

  _getTemplate() {
    const item = document
      .querySelector(this._placeTemplate)
      .content.querySelector(".element")
      .cloneNode(true);
    return item;
  }

  generateElement() {
    this._element = this._getTemplate();
    this._elementText = this._element.querySelector(".element__text");
    this._elementText.textContent = this._result;
    return this._element;
  }
}
