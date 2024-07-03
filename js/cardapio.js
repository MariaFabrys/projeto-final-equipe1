document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const cartPopup = document.getElementById('cart-popup');
  const overlay = document.getElementById('overlay');
  const closeCart = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  let cart = [];

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.classList.add('cart-item');
      li.innerHTML = `
        <span>${item.name}</span>
        <div class="quantity-controls">
          <button class="decrement-btn" data-index="${index}">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="increment-btn" data-index="${index}">+</button>
        </div>
        <span>R$ ${(item.quantity * item.price).toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(li);
      total += item.quantity * item.price;
    });
    cartTotal.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCart();
  }

  function removeFromCart(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    updateCart();
  }

  function updateCounter(name, increment) {
    const itemElement = [...document.querySelectorAll('.cards-itens')].find(item => {
      return item.querySelector('.info-lanches p:first-child').innerText === name;
    });
    const counter = itemElement.querySelector('.counter');
    counter.innerText = parseInt(counter.innerText) + increment;
  }

  document.querySelectorAll('.increment-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const item = event.target.closest('.cards-itens');
      const name = item.querySelector('.info-lanches p:first-child').innerText;
      const price = parseFloat(item.querySelector('.info-lanches p:last-child').innerText.replace('R$', '').replace(',', '.'));
      addToCart(name, price);
      updateCounter(name, 1);
    });
  });

  document.querySelectorAll('.decrement-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const item = event.target.closest('.cards-itens');
      const name = item.querySelector('.info-lanches p:first-child').innerText;
      const counter = item.querySelector('.counter');
      if (parseInt(counter.innerText) > 0) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            updateCounter(name, -1);
          } else {
            cart = cart.filter(item => item.name !== name);
            updateCounter(name, -1);
          }
        }
        updateCart();
      }
    });
  });

  cartItemsContainer.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');
    if (event.target.classList.contains('increment-btn')) {
      cart[index].quantity += 1;
      updateCounter(cart[index].name, 1);
      updateCart();
    } else if (event.target.classList.contains('decrement-btn')) {
      updateCounter(cart[index].name, -1);
      removeFromCart(index);
    }
  });

  cartIcon.addEventListener('click', () => {
    overlay.classList.add('active');
    cartPopup.classList.add('active');
  });

  closeCart.addEventListener('click', () => {
    overlay.classList.remove('active');
    cartPopup.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    cartPopup.classList.remove('active');
  });
});
