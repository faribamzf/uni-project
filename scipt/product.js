//search
document.getElementById("search-box").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const products = document.querySelectorAll(".card");

    products.forEach(card => {
        const title =card.querySelector(".title").textContent.toLowerCase();
        if (title.includes(searchText)) {
            card.style.display = "block";  
        } else {
            card.style.display = "none";  
        }
    });
});

//category
document.addEventListener("DOMContentLoaded", () => {
  const allButton = document.getElementById("every");
  const coatButton = document.querySelector("button:nth-of-type(2)");
  const accessoriesButton = document.querySelector("button:nth-of-type(3)");
  const shoesButton = document.querySelector("button:nth-of-type(4)");
  const bagButton = document.querySelector("button:nth-of-type(5)");
  const cards = document.querySelectorAll(".card");
  const searchBox = document.getElementById("search-box");
  const watchButton = document.querySelector("button:nth-of-type(6)");


  // دکمه همه
  allButton.addEventListener("click", () => {
    cards.forEach(card => {
      card.style.display = "block";
    });
    searchBox.style.display = "block";
  });

  // دکمه کت
  coatButton.addEventListener("click", () => {
    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      if (name.includes("کت")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    searchBox.style.display = "none";
  });

  // دکمه اکسسوری
  accessoriesButton.addEventListener("click", () => {
    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      if (name.includes("اکسسوری")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    searchBox.style.display = "none";
  });
  // دکمه کفش
  shoesButton.addEventListener("click", () => {
    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      if (name.includes("کفش")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    searchBox.style.display = "none";
  });
  // دکمه کیف
  bagButton.addEventListener("click", () => {
    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      if (name.includes("کیف")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    searchBox.style.display = "none";
  });

  // دکمه کیف
  watchButton.addEventListener("click", () => {
    cards.forEach(card => {
      const name = card.getAttribute("data-name");
      if (name.includes("ساعت")) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    searchBox.style.display = "none";
  });
});


//add to cart
// let cart = [];

// function toggleCart() {
//     document.querySelector(".cart-dropdown").classList.toggle("active");
// }

// function updateCart() {
//     let cartItems = document.getElementById("cart-items");
//     let cartTotal = document.getElementById("cart-total");
//     let cartCount = document.getElementById("cart-count");

//     cartItems.innerHTML = "";
//     let total = 0;

//     cart.forEach((item, index) => {
//         let li = document.createElement("li");
//         li.classList.add("cart-item");

//         li.innerHTML = `
//             <div class="cart-item-info">
//                 <div class="cart-item-title">${item.name}</div>
//                 <div class="cart-item-price">${item.price.toLocaleString()} تومان</div>
//             </div>
//             <div class="cart-item-quantity">
//                 <button onclick="decreaseQuantity(${index})">-</button>
//                 <span>${item.quantity}</span>
//                 <button onclick="increaseQuantity(${index})">+</button>
//             </div>
//         `;

//         cartItems.appendChild(li);
//         total += item.price * item.quantity;
//     });

//     cartTotal.textContent = total.toLocaleString();
//     cartCount.textContent = cart.length;
// }

// function addToCart(event) {
//     let card = event.target.closest(".card");
//     let name = card.getAttribute("data-name");
//     let price = parseInt(card.getAttribute("data-price"));
//     let image = card.getAttribute("data-image");

//     let existingItem = cart.find(item => item.name === name);
//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({ name, price, image, quantity: 1 });
//     }

//     updateCart();
// }

// function increaseQuantity(index) {
//     cart[index].quantity++;
//     updateCart();
// }

// function decreaseQuantity(index) {
//     if (cart[index].quantity > 1) {
//         cart[index].quantity--;
//     } else {
//         cart.splice(index, 1);
//     }
//     updateCart();
// }

// document.querySelectorAll(".add-to-cart").forEach((button) => {
//     button.addEventListener("click", addToCart);
// });
