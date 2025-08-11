// script.js

// Sélection des éléments
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalSpan = document.querySelector(".total");

// Fonction pour recalculer le prix total
function updateTotal() {
  let total = 0;
  const products = document.querySelectorAll(".card");
  products.forEach((product) => {
    const price = parseFloat(product.querySelector(".unit-price").textContent);
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    total += price * quantity;
  });
  totalSpan.textContent = total + " $";
}

// Événement pour bouton +
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quantitySpan = btn.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

// Événement pour bouton -
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quantitySpan = btn.previousElementSibling;
    let currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 0) {
      quantitySpan.textContent = currentQuantity - 1;
      updateTotal();
    }
  });
});

// Événement pour bouton supprimer
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Événement pour bouton cœur
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.color = btn.style.color === "red" ? "black" : "red";
  });
});
