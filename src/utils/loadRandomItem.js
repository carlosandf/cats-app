import showImages from "./showImages.js";
import Item from "../Class/Item.js";
import saveFavouriteItem from "./saveFavouriteItem.js";
import loadFavouriteItem from "./loadFavouriteItem.js";
const mainContainer = document.querySelector('.main');

const API_KEY = "api_key=5f090e7b-2af0-4179-9ecc-42922dd48df4";
const URL_API_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=4&${API_KEY}`;

async function loadRandomItem () {
  
  const resp = await fetch(URL_API_RANDOM);
  const data = await resp.json();

  if (resp.status !== 200) {
    console.log('err', resp);
    error.innerText = 'Hubo un error: ' + resp.status;
  } else {
    const random = document.getElementById('random')
    const randomItemContainer = document.createElement('div');
    randomItemContainer.classList.add('main-container');
    random.innerHTML = `
        <div>
          <h2>Cats Random</h2>
        </div>
      `
    data.forEach((item) => {
      const element = new Item()
      element.renderItem(item)
      randomItemContainer.append(element.itemContainer);
      element.button.innerText = 'Add To Favourites'
      element.button.addEventListener('click', () => {
        saveFavouriteItem(item.id);
        loadFavouriteItem();
      })

      element.figure.addEventListener("click", () => {
          showImages(mainContainer, element.img);
      });
    });
    random.appendChild(randomItemContainer)
  }
};
export default loadRandomItem