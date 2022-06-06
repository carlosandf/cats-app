const modal = document.createElement("div");

const showModal = (container) => {
  modal.classList.add("modal");
  modal.classList.add("toggle");
  container.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
      }
    }
  });
  return modal;
};

const showImages = (container, img) => {
  const element = showModal(container);
  const childImg = document.createElement("img");
  const figure = document.createElement("figure");
  figure.classList.add("modal-img-container");
  childImg.src = img.src;
  container.appendChild(figure);

  element.addEventListener("click", (e) => {
    if (e.target === element && figure.parentNode === container) {
      container.removeChild(figure);
    }
  });

  figure.appendChild(childImg);
};
export default showImages;
