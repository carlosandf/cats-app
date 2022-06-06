export default class Item {
  constructor() {
    this.itemContainer = document.createElement('div');
    this.figure = document.createElement("figure");
    this.img = document.createElement("img");
    this.button = document.createElement('button')

  }

  renderItem(data) {
    this.itemContainer.classList.add('item-container')
    this.itemContainer.appendChild(this.figure);
    this.itemContainer.appendChild(this.button)
    this.button.innerText='Añadir a Favoritos';
    this.figure.classList.add("img-main-container");
    this.img.src = data.url;
    this.figure.appendChild(this.img);
    this.itemContainer
  }
}