import loadFavouriteItem from "./loadFavouriteItem.js";
const error = document.getElementById('error');
const URL_API_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

async function deleteFavouriteItem(id) {
  const resp = await fetch(URL_API_DELETE(id), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': '5f090e7b-2af0-4179-9ecc-42922dd48df4',
    }
  });
  const data = await resp.json();
  
  if(resp.status !== 200) {
    error.style.display = 'block';
    error.innerText = `Hubo un error ${resp.status} ${data.message}`;
  } else {
    loadFavouriteItem();
  }
};
export default deleteFavouriteItem;