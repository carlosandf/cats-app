import showImages from "./utils/showImages.js";
import Item from "./Class/Item.js";
const container = document.querySelector(".container");
const imgContainer = document.getElementById("img-container");
const btn = document.querySelector(".button-reload");
const error = document.getElementById('error')

const API_KEY = "&api_key=5f090e7b-2af0-4179-9ecc-42922dd48df4";
const URL_API_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=3${API_KEY}`;
const URL_API_FAVORITES = `https://api.thecatapi.com/v1/favourites?${API_KEY}`;

const reset = () => {
  while (imgContainer.firstChild) {
    imgContainer.removeChild(imgContainer.firstChild);
  }
};

async function reloadRandomItem () {
  reset();
  const resp = await fetch(URL_API_RANDOM);
  const data = await resp.json();

  if (resp.status !== 200) {
    console.log('err', resp);
    error.innerText = 'Hubo un error: ' + resp.status;
  } else {
    console.log('Random')
    console.log(data)
    data.map((item) => {
      const element = new Item()
      element.renderItem(item)
      imgContainer.append(element.itemContainer);
      
      element.figure.addEventListener("click", (e) => {
          showImages(container, element.img);
      });
    });
  }
};
reloadRandomItem();

async function reloadFavouriteItem () {
  reset();
  try {
    const resp = await fetch(URL_API_FAVORITES);
    const data = await resp.json();
    console.log('Favourites')
    console.log(data)
    // data.map((item) => {
    //   const element = new Item()
    //   element.renderItem(item)
    //   imgContainer.append(element.itemContainer);
      
    //   element.figure.addEventListener("click", (e) => {
    //       showImages(container, element.img);
    //   });
        
    // });
  } catch (err) {
    console.error(err);
  }
};
reloadFavouriteItem()

btn.onclick = () => reloadRandomItem();
