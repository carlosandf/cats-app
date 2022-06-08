import loadFavouriteItem from "./loadFavouriteItem.js";

const API_KEY = "api_key=5f090e7b-2af0-4179-9ecc-42922dd48df4";
const URL_API_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?&${API_KEY}`

async function deleteFavouriteItem(id) {
  const resp = await fetch(URL_API_DELETE(id), {
    method: 'DELETE',
  });
  const data = await resp.json();
  loadFavouriteItem();
  
  if(resp.status !== 200) {
    error.innerText = `Hubo un error ${resp.status} ${data.message}`
  } 
};
export default deleteFavouriteItem;