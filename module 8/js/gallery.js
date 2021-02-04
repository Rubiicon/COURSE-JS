'use strict';

import images from './gallery-items.js';

const galleryBlock = document.querySelector('.js-gallery');
const modalLightbox = document.querySelector('.js-lightbox');
const originalImage = document.querySelector('.lightbox__image');
const btn = document.querySelector('[data-action=close-lightbox]');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const modalOverlay = document.querySelector('.lightbox__overlay');

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
function renderMarkup({
  preview,
  original,
  description
}) {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>`;
}

function renderGalleryImg(collection) {
  const img = collection.map(image => renderMarkup(image)).join('');
  galleryBlock.insertAdjacentHTML('afterbegin', img);
}

renderGalleryImg(images);


// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
galleryBlock.addEventListener('click', handleClick);

let elementLi;

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const originUrl = event.target.getAttribute('data-source');
  openModalWindow();
  replacementUrl(originUrl);
  ///
  elementLi = event.target.closest('li');
}

//Открытие модального окна по клику на элементе галереи.
function openModalWindow() {
  modalLightbox.classList.add('is-open');
  window.addEventListener('keydown', closeModal);
}

//закрытие модального окна
modalLightbox.addEventListener('click', closeModal);

function closeModal(event) {
  if (event.target === btn || event.target === modalOverlay || event.code === 'Escape') {
    modalLightbox.classList.remove('is-open');
    originalImage.removeAttribute('src');
    window.removeEventListener('keydown', closeModal);
  }
}

//Подмена значения атрибута src элемента img.lightbox__image.
function replacementUrl(url) {
  originalImage.setAttribute('src', url);
}

//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//Очистка значения атрибута src элемента img.lightbox__image. 
//Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
modalLightbox.addEventListener('click', handleModal);

function handleModal(event) {

  //стрелки
  let nextElement;

  if (event.target === arrowLeft) {
    nextElement = elementLi.previousElementSibling;
  } else if (event.target === arrowRight) {
    nextElement = elementLi.nextElementSibling;
  } else {
    return;
  }

  //с кінця на початок і наоборот
  if (nextElement === null && event.target === arrowRight) {
    nextElement = elementLi.parentElement.firstElementChild;
  } else if (nextElement === null && event.target === arrowLeft) {
    nextElement = elementLi.parentElement.lastElementChild;
  }

  elementLi = nextElement;
  const newImg = nextElement.querySelector('img').getAttribute('data-source');
  replacementUrl(newImg);
}