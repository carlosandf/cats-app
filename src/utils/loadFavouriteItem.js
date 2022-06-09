import Item from "../Class/Item.js";
import showImages from "./showImages.js";
import deleteFavouriteItem from "./deleteFavouriteItem.js";
const mainContainer = document.querySelector('.main');
const error = document.getElementById('error');

const URL_API_FAV = `https://api.thecatapi.com/v1/favourites/`;

async function loadFavouriteItem () {
  
  const resp = await fetch(URL_API_FAV, {
    method: 'GET',
    headers: {
      'X-API-KEY': '5f090e7b-2af0-4179-9ecc-42922dd48df4',
    }
  });
  const data = await resp.json();
  
  if (resp.status !== 200) {
    error.style.display = 'block';
    error.innerText = `Hubo un error ${resp.status} ${data.message}`;
    console.error(err);
  } else {
    const favourites = document.getElementById('favourites')
    const favouriteItemContainer = document.createElement('div');
    favouriteItemContainer.classList.add('main-container');
    favourites.innerHTML = `
      <div>
        <h2>Favourites</h2>
      </div>
    `
    data.reverse();
    data.forEach((item) => {
      const element = new Item()
      element.renderItem(item.image)
      element.button.innerText = 'Delete';
      favouriteItemContainer.appendChild(element.itemContainer)
      element.figure.addEventListener("click", () => {
          showImages(mainContainer, element.img);
      });
      element.button.onclick = () => deleteFavouriteItem(item.id)
    });
    favourites.append(favouriteItemContainer)
  }
};
export default loadFavouriteItem