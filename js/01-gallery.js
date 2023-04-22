import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


gallery.insertAdjacentHTML('beforeend', onGallery(galleryItems));
gallery.addEventListener('click', onModal);

window.addEventListener('keydown', onPress);

let currentInstance;

function onGallery(item) {
    return item.map(({preview, original, description}) => {
        
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    
})
.join('');
}

function onModal (e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
  }
    currentInstance = basicLightbox.create(`<img src="${e.target.dataset.source}">`)
    currentInstance.show();
}

function onPress(e) {
    if (e.code === 'Escape') {
        currentInstance.close();
    }

}