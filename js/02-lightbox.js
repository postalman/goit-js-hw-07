import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", onGallery(galleryItems));
gallery.addEventListener("click", onModal);

let currentInstance = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

function onGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
    })
    .join("");
}

function onModal(e) {
  e.preventDefault();
}
