import showImages from "./utils/showImages.js";
import Item from "./Class/Item.js";
const container = document.querySelector(".main");
const imgRandonContainer = document.getElementById("imgRandonContainer");
const btn = document.querySelector(".button-reload");
const error = document.getElementById('error')

const API_KEY = "api_key=5f090e7b-2af0-4179-9ecc-42922dd48df4";
const URL_API_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=4&${API_KEY}`;
const URL_API_FAV = `https://api.thecatapi.com/v1/favourites?&${API_KEY}`;
const URL_API_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?&${API_KEY}`
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

      element.figure.addEventListener("click", (e) => {
          showImages(container, element.img);
      });
    });
    random.appendChild(randomItemContainer)
  }
};


async function loadFavouriteItem () {
  
  const resp = await fetch(URL_API_FAV);
  const data = await resp.json();
  
  const favourites = document.getElementById('favourites')
  const favouriteItemContainer = document.createElement('div');
  favouriteItemContainer.classList.add('main-container');
  favourites.innerHTML = `
    <div>
      <h2>Favourites</h2>
    </div>
  `
  try {
    
    data.reverse();
    data.forEach((item) => {
      const element = new Item()
      element.renderItem(item.image)
      element.button.innerText = 'Delete';
      favouriteItemContainer.appendChild(element.itemContainer)

      element.figure.addEventListener("click", (e) => {
          showImages(container, element.img);
      });
      
      element.button.onclick = () => deleteFavouriteItem(item.id)
    });
    
    favourites.append(favouriteItemContainer)

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

async function deleteFavouriteItem(id) {
  const resp = await fetch(URL_API_DELETE(id), {
    method: 'DELETE',
  });
  const data = await resp.json();
  loadFavouriteItem();
  
  if(resp.status !== 200) {
    error.innerText = `Hubo un error ${resp.status} ${data.message}`
  } 
  console.log('post')

  console.log(resp)
}

loadRandomItem();
loadFavouriteItem();


btn.onclick = () => loadRandomItem();
