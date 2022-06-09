import loadFavouriteItem from "./loadFavouriteItem.js";
import Message from "./message.js";
const messageContainer = document.getElementById('messageContainer');
const URL_API_FAV = `https://api.thecatapi.com/v1/favourites/`;

export default async function saveFavouriteItem(id) {

  const resp = await fetch(URL_API_FAV, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      'X-API-KEY': '5f090e7b-2af0-4179-9ecc-42922dd48df4',
    },
    body: JSON.stringify({
      image_id: id
    })
  });
  const data = await resp.json();

  const message = new Message({resp, data})

  try {
    loadFavouriteItem();
  } catch (err) {
    messageContainer.appendChild(message.contentMessage('error'));
    console.error(err)
  }
};