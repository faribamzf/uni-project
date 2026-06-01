
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function toggleCart() {
    document.querySelector(".cart-dropdown").classList.toggle("active");
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");


    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.classList.add("cart-item");

        li.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} تومان</div>
            </div>
            <div class="cart-item-quantity">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
        `;

        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = cart.length;

    saveCart();
}

function addToCart(event) {
    let card = event.target.closest(".card");

    let name = card.getAttribute("data-name");
    let price = parseInt(card.getAttribute("data-price"));
    let image = card.getAttribute("data-image");

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    updateCart();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCart();
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", addToCart);
    });
});