import loadRandomItem from "./utils/loadRandomItem.js";
import loadFavouriteItem from "./utils/loadFavouriteItem.js";
import uploadItemPhoto from "./utils/uploadItemPhoto.js";

loadRandomItem();
loadFavouriteItem();

const btnReload = document.querySelector(".button-reload");
btnReload.onclick = () => loadRandomItem();

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = () => uploadItemPhoto();