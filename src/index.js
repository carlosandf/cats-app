import showImages from "./utils/showImages.js";
import Item from "./Class/Item.js";
const container = document.querySelector(".container");
const imgRandonContainer = document.getElementById("imgRandonContainer");
const favouritemContainer = document.createElement('div');
const favourites = document.getElementById('favourites')
const btn = document.querySelector(".button-reload");
const error = document.getElementById('error')

const API_KEY = "api_key=5f090e7b-2af0-4179-9ecc-42922dd48df4";
const URL_API_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=4&${API_KEY}`;
const URL_API_FAV = `https://api.thecatapi.com/v1/favourites?&${API_KEY}`;

const reset = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

async function loadRandomItem () {
  reset(imgRandonContainer);
  const resp = await fetch(URL_API_RANDOM);
  const data = await resp.json();

  if (resp.status !== 200) {
    console.log('err', resp);
    error.innerText = 'Hubo un error: ' + resp.status;
  } else {
    console.log('Random')
    console.log(data)
    
    data.forEach((item) => {
      const element = new Item()
      element.renderItem(item)
      imgRandonContainer.append(element.itemContainer);
      element.button.innerText = 'Add To Favourites'
      element.button.addEventListener('click', () => {
        saveFavouriteItem(item.id);
        loadFavouriteItem();
      })

      element.figure.addEventListener("click", (e) => {
          showImages(container, element.img);
      });
    });
  }
};


async function loadFavouriteItem () {
  reset(favouritemContainer);
  const resp = await fetch(URL_API_FAV);
  const data = await resp.json();

  try {
    console.log('Favourites')
    console.log(data)
    
    
    favouritemContainer.classList.add('main-container');
    
    data.reverse();
    data.forEach((item) => {
      const element = new Item()
      element.renderItem(item.image)
      
      element.button.innerText = 'Delete';
      favouritemContainer.appendChild(element.itemContainer)
      element.button.addEventListener('click', () => {
        data.unshift()
      })

      element.figure.addEventListener("click", (e) => {
          showImages(container, element.img);
      });
    });
    
    favourites.append(favouritemContainer)

  } catch (err) {
    console.error(err);
  }
};

async function saveFavouriteItem(id) {
  const resp = await fetch(URL_API_FAV, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id: id
    })
  });
  const data = await resp.json();
  loadFavouriteItem();
  console.log(data)
  if(resp.status !== 200) {
    error.innerText = `Hubo un error ${resp.status} ${data.message}`
  } 
  console.log('post')

  console.log(resp)
}

loadRandomItem();
loadFavouriteItem();


btn.onclick = () => loadRandomItem();
