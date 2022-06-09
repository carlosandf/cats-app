import loadRandomItem from "./utils/loadRandomItem.js";
import loadFavouriteItem from "./utils/loadFavouriteItem.js";
import uploadItemPhoto from "./utils/uploadItemPhoto.js";

loadRandomItem();
loadFavouriteItem();

const btnReload = document.querySelector(".button-reload");
btnReload.onclick = () => loadRandomItem();

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = () => uploadItemPhoto();

const inputFile = document.getElementById('file');
const fileLabel = document.getElementById('fileLabel');

const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value
  const setValue = newValue => value = newValue
  return [getValue, setValue];
}

const [text, setText] = useState('');
setInterval(() => {
  if (inputFile.value !== '') {
    setText(inputFile.files[0].name);
    fileLabel.innerText = text()
  }
}, 100)