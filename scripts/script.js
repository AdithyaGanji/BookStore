import { addCarouselCardObservers } from './observers.js';
import { books, featuredBooks, testimonials } from './data.js';
import { kickOffOverlay } from './overlay.js';
import { addCartIconListener, addCartButtonListener } from './cart.js';
import { formatCurrency } from './utils.js';

(function injectNewArrivals() {
  const newArrivals = document.querySelector('.new-arrival-books');
  let html = '';

  for (let i = 0; i < 8; i++) {
    const curBook = books[i];

    html += `
      <div class="carousel-card">
        <div class="book-frontcover-container">
          <div class="book-fc-wrapper">
            <div class="book-fc-overlay">
              <button data-book-id="${curBook.bookId}" class="quick-view-btn">Quick View</button>
            </div>
            <img class="book-frontcover" src="${curBook.imageSource}">
          </div>
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

let bookObject = books[featuredBooks[0]];
function injectFeaturedBook() {
  const featuredBookHTML = `
    <img class="book-frontcover fb-frontcover" src="${bookObject.imageSource}"></img>

    <div class="featured-book-details">
      <span class="fb-title">${bookObject.title}</span>

      <div class="fb-price-details">
        <span class="fb-discounted-price">$${formatCurrency(bookObject.priceInCents * 0.7)}</span>
        <span class="fb-original-price">$${formatCurrency(bookObject.priceInCents)}</span>
      </div>

      <div class="fb-additional-details">
        <span class="fb-ad-key">
          Author: <span class="fb-ad-value">${bookObject.author}</span>
        </span>
        
        <span class="fb-ad-key">
          Genre: <span class="fb-ad-value">${bookObject.genre}</span>
        </span>
        
        <span class="fb-ad-key">
          Language: <span class="fb-ad-value">${bookObject.language}</span>
        </span>

        <span class="fb-ad-key">
          Pages: <span class="fb-ad-value">${bookObject.pages}</span>
        </span>
      </div>

      <div class="fb-description">${bookObject.description}</div>

      <button data-book-id="${bookObject.bookId}" class="fb-add-to-cart-container fb-add-to-cart-container-${bookObject.bookId}">
        <svg stroke="#FFF" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>
        <div class="fb-add-to-cart-text">Add to Cart</div>
      </button>
    </div>
  `

  document
    .querySelector('.active-fb-container')
    .innerHTML = featuredBookHTML;

  addCartButtonListener();
};
injectFeaturedBook();

(function injectOtherFeaturedBooks() {
  let otherFeaturedBooksHTML = '';
  for (let i = 0; i < 5; i++) {
    let imageSource = books[featuredBooks[i]].imageSource;
    otherFeaturedBooksHTML += `
      <img data-book-id="${books[featuredBooks[i]].bookId}" class="other-fbs-frontcover other-fbs-frontcover-pos-${i + 1} other-fbs-frontcover-${books[featuredBooks[i]].bookId}" src="${imageSource}">
    `
  }

  document
    .querySelector('.other-fbs-container')
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
          <div class="book-fc-wrapper">
            <div class="book-fc-overlay">
              <button data-book-id="${curBook.bookId}" class="quick-view-btn">Quick View</button>
            </div>
            <img class="book-frontcover" src="${curBook.imageSource}">
          </div>
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
          if (bookObject === books[bookId])
            return;

          bookObject = books[bookId];
          injectFeaturedBook();
        });

      featuredBook
        .addEventListener('mouseenter', () => {
          const { bookId } = featuredBook.dataset;

          for (let i = 0; i < 5; i++) {
            if (Number(bookId) === featuredBooks[i])
              continue;

            document
              .querySelector(`.other-fbs-frontcover-${featuredBooks[i]}`)
              .style.opacity = '0.3';
          }
        });

      featuredBook
        .addEventListener('mouseleave', () => {
          const { bookId } = featuredBook.dataset;

          for (let i = 0; i < 5; i++) {
            document
              .querySelector(`.other-fbs-frontcover-${featuredBooks[i]}`)
              .style.opacity = '1';
          }
        });
    });

  document
    .querySelectorAll('.quick-view-btn')
    .forEach((quickViewButton) => {
      quickViewButton
        .addEventListener('click', () => kickOffOverlay(quickViewButton.dataset.bookId));
    });

  addCartIconListener();
})();

(function injectTestimonials() {
  // Testimonials Container 1:
  const testimonialGroup1 = document.querySelector('.testimonials-group-1');

  let testimonialsHTML1 = '';
  for (let i = 0; i < 4; i++) {
    const curTestimonial = testimonials[i];

    testimonialsHTML1 += `
      <div class="testimonial">
        <img class="double-quotes-icon" src="images/double-quotes-icon.svg" alt="Double Quotes Icon">
        
        <p class="testimonial-content">${curTestimonial.testimonial}</p>

        <div class="testimonial-person-information">
          <img class="tp-profile" src="${curTestimonial.profilePictureSource}">
          <div class="testimonial-person-details">
            <p class="tp-name">${curTestimonial.name}</p>
            <p class="tp-designation">${curTestimonial.designation}</p>
          </div>
        </div>
      </div>
    `
  }
  testimonialGroup1.innerHTML = testimonialsHTML1;

  document
    .querySelector('.testimonials-container-1')
    .innerHTML = `${testimonialGroup1.outerHTML} + ${testimonialGroup1.outerHTML}`

  // Testimonials Container 2:
  const testimonialGroup2 = document.querySelector('.testimonials-group-2');

  let testimonialsHTML2 = '';
  for (let i = 4; i < 8; i++) {
    const curTestimonial = testimonials[i];

    testimonialsHTML2 += `
      <div class="testimonial">
        <img class="double-quotes-icon" src="images/double-quotes-icon.svg" alt="Double Quotes Icon">
        
        <p class="testimonial-content">${curTestimonial.testimonial}</p>

        <div class="testimonial-person-information">
          <img class="tp-profile" src="${curTestimonial.profilePictureSource}">
          <div class="testimonial-person-details">
            <p class="tp-name">${curTestimonial.name}</p>
            <p class="tp-designation">${curTestimonial.designation}</p>
          </div>
        </div>
      </div>
    `
  }
  testimonialGroup2.innerHTML = testimonialsHTML2;

  document
    .querySelector('.testimonials-container-2')
    .innerHTML = `${testimonialGroup2.outerHTML} + ${testimonialGroup2.outerHTML}`
})();

addCarouselCardObservers();
