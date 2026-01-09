export let cart = fetchFromLocalStorage();

const addToCartIconSVG = '<svg class="add-to-cart-icon" stroke="#000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>';
const checkIconSVG = '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';

function addToCart(bookId) {
  cart = fetchFromLocalStorage();

  if (cart.has(bookId))
    cart.set(bookId, cart.get(bookId) + 1);
  else
    cart.set(bookId, 1);

  saveToLocalStorage();
}

export function removeFromCart(bookId) {
  // Fetch the latest state of cart
  cart = fetchFromLocalStorage();

  // Delete the item
  cart.delete(bookId);

  // Save the new state of the cart
  saveToLocalStorage();
}

export function incrementQuantity(bookId) {
  // Fetch the latest state of cart
  cart = fetchFromLocalStorage();

  // Increment the quantity
  cart.set(bookId, cart.get(bookId) + 1);

  // Save the new state of the cart
  saveToLocalStorage();
}

export function decrementQuantity(bookId) {
  // Fetch the latest state of cart
  cart = fetchFromLocalStorage();

  // Increment the quantity
  cart.set(bookId, cart.get(bookId) - 1);

  // Save the new state of the cart
  saveToLocalStorage();
}

export function clearCart() {
  cart.clear();
  localStorage.clear();
}

export function addCartIconListener() {
  document
    .querySelectorAll('.add-to-cart-container')
    .forEach((cartIcon) => {
      cartIcon.addEventListener('click', () => {
        const { bookId } = cartIcon.dataset;

        addToCart(Number(bookId));
        displayCheckMark(bookId);
      });
    });
}

export function addCartButtonListener() {
  document
    .querySelectorAll('.fb-add-to-cart-container')
    .forEach((cartButton) => {
      cartButton.addEventListener('click', () => {
        const { bookId } = cartButton.dataset;
        
        addToCart(Number(bookId));
        displayAddedMessage(bookId);
      })
    })
}

function displayCheckMark(bookId) {
  const addToCartContainer = document.querySelector(`.add-to-cart-container-${bookId}`);
        
  addToCartContainer.innerHTML = checkIconSVG;
  addToCartContainer.classList.add('icon-added-to-cart');

  setTimeout(() => {
    addToCartContainer.innerHTML = addToCartIconSVG;
    addToCartContainer.classList.remove('icon-added-to-cart');
  }, 1500)
}

function displayAddedMessage(bookId) {
  const whiteAddToCartIconSVG = '<svg class="add-to-cart-icon" stroke="#FFF" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M9 11v-5a3 3 0 0 1 6 0v5"></path></svg>';
  const whiteCheckIconSVG = '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#FFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';

  const addToCartContainer = document.querySelector(`.fb-add-to-cart-container-${bookId}`);

  addToCartContainer.innerHTML = whiteCheckIconSVG;
  addToCartContainer.classList.add('button-added-to-cart');

  setTimeout(() => {
    addToCartContainer.innerHTML = `
      ${whiteAddToCartIconSVG}
      <div class="fb-add-to-cart-text">Add to Cart</div>
    `;
    addToCartContainer.classList.remove('button-added-to-cart');
  }, 1500)
}

function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify([...cart]));
}

function fetchFromLocalStorage() {
  const JSONObject = JSON.parse(localStorage.getItem('cart'));
  return (!JSONObject) ? new Map() : new Map(JSONObject);
}
