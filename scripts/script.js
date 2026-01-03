import { books, featuredBooks } from './data.js';
import { formatCurrency } from './utils.js';

document
  .querySelector('.header-nav-home')
  .classList.add('active-nav');

(function injectNewArrivals() {
  const newArrivals = document.querySelector('.new-arrival-books');
  let html = '';

  for (let i = 0; i < 8; i++) {
    const curBook = books[i];

    html += `
      <div class="carousel-card">
        <div class="book-frontcover-container">
          <img class="book-frontcover" src="${curBook.imageSource}">
        </div>

        <div class="book-details">
          <div class="title-and-cart-option">
            <span class="book-title">${curBook.title}</span>
            <svg data-book-id="${curBook.bookId}" class="add-to-cart-icon" stroke="#000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
          </div>
          <div class="genre-and-price">
            <span class="book-genre">${curBook.genre}</span>
            <span class="book-price">$${formatCurrency(curBook.priceInCents * 0.7)}</span>
          </div>
        </div>
      </div>
    `
  }

  newArrivals.innerHTML = html;
})();

let selectedBook = books[featuredBooks[0]];
function injectFeaturedBook() {
  const featuredBookHTML = `
    <img class="book-frontcover fb-frontcover" src="${selectedBook.imageSource}"></img>

    <div class="featured-book-details">
      <span class="fb-title">${selectedBook.title}</span>
      <span class="fb-genre">${selectedBook.genre}</span>

      <div class="fb-price-details">
        <span class="fb-discounted-price">$${formatCurrency(selectedBook.priceInCents * 0.7)}</span>
        <span class="fb-original-price">$${formatCurrency(selectedBook.priceInCents)}</span>
      </div>

      <div class="fb-description">${selectedBook.description}</div>

      <div data-book-id="${selectedBook.bookId}" class="fb-add-to-cart-container">
        <svg stroke="#FFF" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
        <button class="fb-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  `

  document
    .querySelector('.featured-book-container')
    .innerHTML = featuredBookHTML;
};
injectFeaturedBook();

(function injectOtherFeaturedBooks() {
  let otherFeaturedBooksHTML = '';
  for (let i = 0; i < 6; i++) {
    let imageSource = books[featuredBooks[i]].imageSource;
    otherFeaturedBooksHTML += `
      <img data-book-id="${books[featuredBooks[i]].bookId}" class="other-fbs-frontcover" src="${imageSource}">
    `
  }

  document
    .querySelector('.other-featured-books')
    .innerHTML = otherFeaturedBooksHTML;
})();

(function addEventListeners() {
  document
    .querySelectorAll('.other-fbs-frontcover')
    .forEach((featuredBook) => {
      featuredBook
        .addEventListener('click', () => {
          const { bookId } = featuredBook.dataset;
          if (selectedBook === books[bookId])
            return;

          selectedBook = books[bookId];
          injectFeaturedBook();
        });
    });
})();

(function injectStoreBooks() {
  const newArrivals = document.querySelector('.book-store-books');
  let html = '';

  for (let i = 8; i < 25; i++) {
    const curBook = books[i];

    html += `
      <div class="carousel-card">
        <div class="book-frontcover-container">
          <img class="book-frontcover" src="${curBook.imageSource}">
        </div>

        <div class="book-details">
          <div class="title-and-cart-option">
            <span class="book-title">${curBook.title}</span>
            <svg data-book-id="${curBook.bookId}" class="add-to-cart-icon" stroke="#000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
          </div>
          <div class="genre-and-price">
            <span class="book-genre">${curBook.genre}</span>
            <span class="book-price">$${formatCurrency(curBook.priceInCents * 0.7)}</span>
          </div>
        </div>
      </div>
    `
  }

  newArrivals.innerHTML = html;
})();
