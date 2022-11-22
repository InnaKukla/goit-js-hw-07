import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryContainer = document.querySelector(".gallery")
console.log(galleryContainer);

const gallaryImages = createGallaryCards(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryImages);
galleryContainer.addEventListener('click', onImgClick);

 

function createGallaryCards(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
        .join("");   
};


function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return
    } 
   const instance = basicLightbox.create(`
    <div class="modal"> <img src="${e.target.dataset.source}" alt="${e.target.alt}"></div>`).show()
}



// const targetDataset = e.target.dataset.source;
const instance = basicLightbox.create(`<div class="modal">
<img src="${e.target.dataset.source}" alt="${e.target.alt}"></div>`,
    {
     onShow: (instance) => {
        window.addEventListener('keydown', onEscapeButton);
     },
     onclose: (instance) => {
        window.removeEventListener('keydown', onEscapeButton);
     },
 })
 
instance.show()
 
function onEscapeButton(e) {
    if (e.code === "Escape") {
        instance.close()
        
    }
} 
// instance.show()

console.log(galleryItems);