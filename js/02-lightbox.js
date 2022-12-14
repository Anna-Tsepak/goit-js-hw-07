import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsEl = document.querySelector('.gallery');

const markUp = onCreateItem(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', markUp);

function onCreateItem(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"
  title = "${description}" />
</a>`}).join(''); }


function onImageClick(e) {
    e.preventDefault();

      if (e.target.nodeName !== 'IMG') {
        return
    }
}

new SimpleLightbox('.gallery a', {	captionDelay: 250})