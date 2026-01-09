import { books } from './data.js';
import { cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } from './cart.js';
import { formatCurrency } from './utils.js';

function displayCartItems() {
  const cartItemsContainer = document.querySelector('.cart-items-container');
  
  let cartItemsHTML = '';
  cart.forEach((bookQuantity, bookId) => {
    const bookObject = books[bookId];
    
    cartItemsHTML += `
      <div class="cart-item-wrapper">
        <div class="cart-item">
          <img class="delete-icon" data-book-id="${bookId}" src="images/delete-icon.svg"></img>

          <img class="book-frontcover" src="${bookObject.imageSource}"></img>
          <div class="cart-item-details">
            <h2 class="book-title">${bookObject.title}</h2>

            <div class="book-price-details">
              <span class="book-discounted-price">$${formatCurrency(bookObject.priceInCents * 0.7)}</span>
              <span class="book-original-price">$${formatCurrency(bookObject.priceInCents)}</span>
            </div>

            <div class="book-quantity-wrapper">
              <button data-book-id="${bookId}" class="minus-btn-wrapper" ${bookQuantity <= 1 ? 'disabled' : ''}>
                <img class="minus-icon" src="images/minus-icon.svg">
              </button>
              <span class="book-quantity">${bookQuantity}</span>
              <button data-book-id="${bookId}" class="plus-btn-wrapper" ${bookQuantity >= 5 ? 'disabled' : ''}>
                <img class="plus-icon" src="images/plus-icon.svg">
              </button>
            </div>

            <div class="subtotal-wrapper">
              <span class="subtotal-text">Subtotal:</span>
              <span class="subtotal-amount">$${formatCurrency(bookObject.priceInCents * bookQuantity)}</span>
            </div>
          </div>
        </div>
      </div>
    `  
  });
  cartItemsContainer.innerHTML = cartItemsHTML;
}

function addEventListeners() {
  const plusButtons = document.querySelectorAll('.plus-btn-wrapper');
  plusButtons
    .forEach(plusButton => {
      plusButton.addEventListener('click', () => {
        let {bookId} = plusButton.dataset;
        
        incrementQuantity(Number(bookId));
        renderCartPage();
      });
    });


  const minusButtons = document.querySelectorAll('.minus-btn-wrapper');
  minusButtons
    .forEach(minusButton => {
      minusButton.addEventListener('click', () => {
        let {bookId} = minusButton.dataset;
        
        decrementQuantity(Number(bookId));
        renderCartPage();
      });
    });

  const deleteIcons = document.querySelectorAll('.delete-icon');
  deleteIcons
    .forEach(deleteIcon => {
      deleteIcon.addEventListener('click', () => {
        let {bookId} = deleteIcon.dataset;
        
        removeFromCart(Number(bookId));
        renderCartPage();
      });
    });
};

function displayPaymentSummary() {
  const paymentSummaryContainer = document.querySelector('.payment-summary-container');

  const [taxPercentage, shippingCharges] = [0.1, 499];
  
  let [itemCount, itemsTotalAmount] = [0, 0]
  cart.forEach((bookQuantity, bookId) => {
    itemCount += bookQuantity;
    itemsTotalAmount += books[bookId].priceInCents * bookQuantity;
  })

  const totalBeforeTax = itemsTotalAmount + shippingCharges;
  const totalAfterTax = totalBeforeTax + (totalBeforeTax * taxPercentage);

  let paymentSummaryHTML = `
    <div class="payment-summary-text-wrapper">
      <h2 class="payment-summary-text">Payment Summary</h2>
    </div>

    <div class="payment-brakeup">
      <div class="payment-brakeup-subsection items-total">
        <span class="pbs-header items-text">Items (<span class="items-count">${itemCount}</span>)</span>
        <span class="pbs-amount items-total-amount">$${formatCurrency(itemsTotalAmount)}</span>
      </div>
      <div class="payment-brakeup-subsection shipping-and-handling">
        <span class="pbs-header shipping-and-handling-text">Shipping & Handling</span>
        <span class="pbs-amount shipping-and-handling-amount">$${formatCurrency(shippingCharges)}</span>
      </div>
      <div class="payment-brakeup-subsection total-before-tax">
        <span class="pbs-header total-before-tax-text">Total Before Tax</span>
        <span class="pbs-amount total-before-tax-amount">$${formatCurrency(totalBeforeTax)}</span>
      </div>
      <div class="payment-brakeup-subsection estimated-tax">
        <span class="pbs-header estimated-tax-text">Estimated Tax (10%)</span>
        <span class="pbs-amount estimated-tax-amount">$${formatCurrency(totalBeforeTax * taxPercentage)}</span>
      </div>
    </div>

    <div class="order-total-and-payment-button">
      <div class="order-total">
        <span class="order-total-text">Order Total</span>
        <span class="order-total-amount">$${formatCurrency(totalAfterTax)}</span>
      </div>

      <div class="payment-btn-wrapper">
        <button class="payment-btn">Place Your Order</button>
      </div>
    </div>
  `;
  paymentSummaryContainer.innerHTML = paymentSummaryHTML;
}

function makePaymentButtonInteractive() {
  const paymentButton = document.querySelector('.payment-btn');
  paymentButton
    .addEventListener('click', () => {
      paymentButton.disabled = true;
      paymentButton.innerHTML = 'Processing...';

      setTimeout(() => {
        paymentButton.innerHTML = 'Payment Success!';
      }, 1500)

      setTimeout(() => {
        paymentButton.innerHTML = 'Processing...';
        clearCart();
        renderCartPage();
      }, 3500)
    });
}

function renderCartPage() {
  if (cart.size === 0) {
    document.querySelector('.cart-content').style.display = 'none';
    document.querySelector('.empty-cart-message').style.display = 'block';
    return;
  }
  document.querySelector('.empty-cart-message').style.display = 'none';
  document.querySelector('.cart-content').style.display = 'flex';

  displayCartItems();
  addEventListeners();
  displayPaymentSummary();
  makePaymentButtonInteractive();
}
renderCartPage();
