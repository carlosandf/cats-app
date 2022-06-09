import Message from "./message.js";
import saveFavouriteItem from "./saveFavouriteItem.js";
const URL__API_UPLOAD = `https://api.thecatapi.com/v1/images/upload/`;
const messageContainer = document.getElementById('messageContainer');

export default async function uploadItemPhoto() {
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form);
  console.log(formData.get('file'));

  const resp = await fetch(URL__API_UPLOAD, {
    method: 'POST',
    headers: {
      //'Content-Type': 'multipart/form-data',
      'X-API-KEY': '5f090e7b-2af0-4179-9ecc-42922dd48df4',
    },
    body: formData,
  });
  const data = await resp.json();

  const message = new Message({resp, data})

  if (resp.status >= 200 && resp.status < 300) {
    messageContainer.appendChild(message.contentMessage('succes', 'Upload Succes!!!'));
    saveFavouriteItem(data.id)
  } else {
    messageContainer.appendChild(message.contentMessage('error'));
  }

  // try {
  //   messageContainer.appendChild(message.contentMessage('succes', 'Upload Succes!!!'));
  //   console.log(data)
  //   saveFavouriteItem(data.id)
  // } catch (err) {
  //   messageContainer.appendChild(message.contentMessage('error'));
  // }
}