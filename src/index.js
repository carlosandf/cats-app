import loadRandomItem from "./utils/loadRandomItem.js";
import loadFavouriteItem from "./utils/loadFavouriteItem.js";
const btn = document.querySelector(".button-reload");
const error = document.getElementById('error')
 
// async function loadRandomItem () {
  
//   const resp = await fetch(URL_API_RANDOM);
//   const data = await resp.json();

//   if (resp.status !== 200) {
//     console.log('err', resp);
//     error.innerText = 'Hubo un error: ' + resp.status;
//   } else {
//     const random = document.getElementById('random')
//     const randomItemContainer = document.createElement('div');
//     randomItemContainer.classList.add('main-container');
//     random.innerHTML = `
//         <div>
//           <h2>Cats Random</h2>
//         </div>
//       `
    
//     data.forEach((item) => {
//       const element = new Item()
//       element.renderItem(item)
//       randomItemContainer.append(element.itemContainer);
//       element.button.innerText = 'Add To Favourites'
//       element.button.addEventListener('click', () => {
//         saveFavouriteItem(item.id);
//         loadFavouriteItem();
//       })

//       element.figure.addEventListener("click", (e) => {
//           showImages(container, element.img);
//       });
//     });
//     random.appendChild(randomItemContainer)
//   }
// };


// async function loadFavouriteItem () {
  
//   const resp = await fetch(URL_API_FAV);
//   const data = await resp.json();
  
//   const favourites = document.getElementById('favourites')
//   const favouriteItemContainer = document.createElement('div');
//   favouriteItemContainer.classList.add('main-container');
//   favourites.innerHTML = `
//     <div>
//       <h2>Favourites</h2>
//     </div>
//   `
//   try {
    
//     data.reverse();
//     data.forEach((item) => {
//       const element = new Item()
//       element.renderItem(item.image)
//       element.button.innerText = 'Delete';
//       favouriteItemContainer.appendChild(element.itemContainer)

//       element.figure.addEventListener("click", () => {
//           showImages(container, element.img);
//       });
      
//       element.button.onclick = () => deleteFavouriteItem(item.id)
//     });
    
//     favourites.append(favouriteItemContainer)

//   } catch (err) {
//     console.error(err);
//   }
// };

// async function saveFavouriteItem(id) {
//   const resp = await fetch(URL_API_FAV, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       image_id: id
//     })
//   });
//   const data = await resp.json();
//   loadFavouriteItem();
//   console.log(data)
//   if(resp.status !== 200) {
//     error.innerText = `Hubo un error ${resp.status} ${data.message}`
//   } 
//   console.log('post')

//   console.log(resp)
// }

// async function deleteFavouriteItem(id) {
//   const resp = await fetch(URL_API_DELETE(id), {
//     method: 'DELETE',
//   });
//   const data = await resp.json();
//   loadFavouriteItem();
  
//   if(resp.status !== 200) {
//     error.innerText = `Hubo un error ${resp.status} ${data.message}`
//   } 
//   console.log('post')

//   console.log(resp)
// }

loadRandomItem();
loadFavouriteItem();


btn.onclick = () => loadRandomItem();
