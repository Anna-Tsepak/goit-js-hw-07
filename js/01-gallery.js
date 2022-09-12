import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryItemsEl = document.querySelector('.gallery');

const markUp = onCreateItem(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', markUp);

function onCreateItem(items) {
    return items.map(item => {
        return `
       <div class="gallery__item">
  <a class="gallery__link" href="${item.preview}"
  data-lightbox = "lbox">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`}).join('')
}


// відкриття і закриття модального вікна

galleryItemsEl.addEventListener('click', e => {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
    const imageEl = e.target.getAttribute('data-source')
    
    const instance = basicLightbox.create(`<img src="${imageEl}" width="800" height="600">`)
   
    instance.show()

    galleryItemsEl.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close()
        }
    })
})
