import { books } from './data.js';
import { addCartButtonListener } from './cart.js';
import { formatCurrency } from './utils.js';

const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('.close-icon-container');

export function kickOffOverlay(bookId) {
  // Enable overlay
  overlay.style.display = 'flex';

  // Inject content of the selected book
  injectSelectedBookContent(bookId);
}

export function injectSelectedBookContent(bookId) {
  const book = books[bookId];
  const selectedBookHTML = `
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
    .querySelector('.selected-book-content')
    .innerHTML = selectedBookHTML;

  addCartButtonListener();
}

closeIcon
  .addEventListener('click', () => {
    // Disable overlay
    overlay.style.display = 'none';
  });

document
  .body
  .addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.style.display !== 'none')
      closeIcon.click();
  });
