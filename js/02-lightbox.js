import { galleryItems } from './gallery-items.js';
// Change code below this line

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

const galleryContain = document.querySelector(".gallery")
console.log(galleryContain);

const gallaryImag = createGallaryCards(galleryItems);
galleryContain.insertAdjacentHTML("beforeend", gallaryImag);

function createGallaryCards(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
    
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>`;
    })
        .join("");   
};

var lightbox = new SimpleLightbox(".gallery__item", { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',

});


























console.log(galleryItems);
