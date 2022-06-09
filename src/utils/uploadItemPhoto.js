const URL__API_UPLOAD = `https://api.thecatapi.com/v1/images/upload/`;
const error = document.getElementById('error');

export default async function uploadItemPhoto() {
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form);
  console.log(formData.get('file'));

  const resp = await fetch(URL__API_UPLOAD, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-API-KEY': '5f090e7b-2af0-4179-9ecc-42922dd48df4',
    },
    body: formData,
  })
  const data = await resp.json();
  if(resp.status !== 200) {
    error.style.display = 'block';
    error.innerText = `Hubo un error ${resp.status} ${data.message}`;
  }
  console.log(data);
}