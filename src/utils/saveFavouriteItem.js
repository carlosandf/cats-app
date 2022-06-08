import loadFavouriteItem from "./loadFavouriteItem.js";

const API_KEY = "api_key=5f090e7b-2af0-4179-9ecc-42922dd48df4";
const URL_API_FAV = `https://api.thecatapi.com/v1/favourites?&${API_KEY}`;

export default async function saveFavouriteItem(id) {

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
};