
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';


let refs = {
    gallery: document.querySelector('.gallery'),
};


createMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {
	
});



function createMarkup(galleryItems) {

    let markup = galleryItems.map(el => {

        return `<a class="gallery__item" href="${el.original}"><img class="gallery__image" data-source=${el.original} src=${el.preview} alt=${el.description}></a>`;
      
    }).join(' ');

    refs.gallery.innerHTML = markup;
}
