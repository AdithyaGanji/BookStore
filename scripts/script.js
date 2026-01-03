import { books, featuredBooks } from './data.js';
import { kickOffOverlay } from './overlay.js';
import { addCartIconListener, addCartButtonListener } from './cart.js';
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
          <img data-book-id="${curBook.bookId}" class="book-frontcover" src="${curBook.imageSource}">
        </div>

        <div class="book-details">
          <div class="title-and-cart-option">
            <span class="book-title">${curBook.title}</span>
            <div data-book-id="${curBook.bookId}" class="bg-on-hover add-to-cart-container add-to-cart-container-${curBook.bookId}">
              <svg class="add-to-cart-icon" stroke="#000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
            </div>
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

let book = books[featuredBooks[0]];
function injectFeaturedBook() {
  const featuredBookHTML = `
    <img class="book-frontcover fb-frontcover" src="${book.imageSource}"></img>

    <div class="featured-book-details">
      <span class="fb-title">${book.title}</span>

      <div class="fb-price-details">
        <span class="fb-discounted-price">$${formatCurrency(book.priceInCents * 0.7)}</span>
        <span class="fb-original-price">$${formatCurrency(book.priceInCents)}</span>
      </div>

      <div class="fb-additional-details">
        <span class="fb-ad-key">
          Author: <span class="fb-ad-value">${book.author}</span>
        </span>
        
        <span class="fb-ad-key">
          Genre: <span class="fb-ad-value">${book.genre}</span>
        </span>
        
        <span class="fb-ad-key">
          Language: <span class="fb-ad-value">${book.language}</span>
        </span>

        <span class="fb-ad-key">
          Pages: <span class="fb-ad-value">${book.pages}</span>
        </span>
      </div>

      <div class="fb-description">${book.description}</div>

      <button data-book-id="${book.bookId}" class="fb-add-to-cart-container fb-add-to-cart-container-${book.bookId}">
        <svg stroke="#FFF" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
        <div class="fb-add-to-cart-text">Add to Cart</div>
      </button>
    </div>
  `

  document
    .querySelector('.featured-book-container')
    .innerHTML = featuredBookHTML;

  addCartButtonListener();
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

(function injectStoreBooks() {
  const newArrivals = document.querySelector('.book-store-books');
  let html = '';

  for (let i = 8; i < 25; i++) {
    const curBook = books[i];

    html += `
      <div class="carousel-card">
        <div class="book-frontcover-container">
          <img data-book-id="${curBook.bookId}" class="book-frontcover" src="${curBook.imageSource}">
        </div>

        <div class="book-details">
          <div class="title-and-cart-option">
            <span class="book-title">${curBook.title}</span>
            <div data-book-id="${curBook.bookId}" class="bg-on-hover add-to-cart-container add-to-cart-container-${curBook.bookId}">
              <svg class="add-to-cart-icon" stroke="#000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
            </div>
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

(function addEventListeners() {
  document
    .querySelectorAll('.other-fbs-frontcover')
    .forEach((featuredBook) => {
      featuredBook
        .addEventListener('click', () => {
          const { bookId } = featuredBook.dataset;
          if (book === books[bookId])
            return;

          book = books[bookId];
          injectFeaturedBook();
        });
    });

  document
    .querySelectorAll('.book-frontcover')
    .forEach((bookFrontcover) => {
      bookFrontcover
        .addEventListener('click', () => kickOffOverlay(bookFrontcover.dataset.bookId));
    });

  addCartIconListener();
})();
