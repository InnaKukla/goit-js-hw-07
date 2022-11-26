import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryContainer = document.querySelector(".gallery")
console.log(galleryContainer);

const gallaryImages = createGallaryCards(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryImages);


 

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


const ImgClick = document.querySelector('.gallery')

ImgClick.addEventListener('click', e => {
    e.preventDefault();
        if (e.target.nodeName !== "IMG") {
            return
        } 

    function onEscapeButton(e) {
        if (e.code === "Escape") {
            instance.close()
        }
    }
    const instance = basicLightbox.create(`<div class="modal">
        <img src="${e.target.dataset.source}" alt="${e.target.alt}"></div>`,
        {
            onShow: () => {
                document.addEventListener('keydown', onEscapeButton);
            },
            onclose: () => {
                document.removeEventListener('keydown', onEscapeButton);
            },
        });
        instance.show()
    })

console.log(galleryItems);