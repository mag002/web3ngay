// Shopping Cart API

// Shopping Cart Module
var shoppingCart = (function () {
  var cart = [];

  // Item Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart to session storage
  function saveCart() {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  // Load cart from session storage
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem("shoppingCart")) || [];
  }

  loadCart();

  // Public Methods
  var obj = {};

  // Add item to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var newItem = new Item(name, price, count);
    cart.push(newItem);
    saveCart();
  };

  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // Remove all items of a type from cart
  obj.removeItemFromCartAll = function (name) {
    cart = cart.filter((item) => item.name !== name);
    saveCart();
  };

  // Clear the entire cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Get total count of items in cart
  obj.totalCount = function () {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  // Get total price of items in cart
  obj.totalCart = function () {
    return cart
      .reduce((total, item) => total + item.price * item.count, 0)
      .toFixed(2);
  };

  // Get a copy of the cart
  obj.listCart = function () {
    return cart.map((item) => ({
      name: item.name,
      price: item.price,
      count: item.count,
      total: (item.price * item.count).toFixed(2),
    }));
  };

  return obj;
})();

// Triggers / Events
// Add item to cart
document.querySelectorAll(".add-to-cart").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    var name = button.getAttribute("data-name");
    var price = parseFloat(button.getAttribute("data-price"));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
});

// Clear cart
document.querySelector(".clear-cart").addEventListener("click", function () {
  shoppingCart.clearCart();
  displayCart();
});

// Display Cart
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output +=
      "<tr>" +
      "<td>" +
      cartArray[i].name +
      "</td>" +
      "<td>(" +
      cartArray[i].price +
      ")</td>" +
      "<td><div class='input-group'>" +
      "<button class='minus-item input-group-addon btn btn-primary' data-name=" +
      cartArray[i].name +
      ">-</button>" +
      "<input type='number' class='item-count form-control' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "'>" +
      "<button class='plus-item btn btn-primary input-group-addon' data-name=" +
      cartArray[i].name +
      ">+</button></div></td>" +
      "<td><button class='delete-item btn btn-danger' data-name=" +
      cartArray[i].name +
      ">X</button></td>" +
      " = " +
      "<td>" +
      cartArray[i].total +
      "</td>" +
      "</tr>";
  }
  document.querySelector(".show-cart").innerHTML = output;
  document.querySelector(".total-cart").innerHTML = shoppingCart.totalCart();
  document.querySelector(".total-count").innerHTML = shoppingCart.totalCount();
}

// Event Delegation for Dynamic Elements
document
  .querySelector(".show-cart")
  .addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("delete-item")) {
      var name = target.getAttribute("data-name");
      shoppingCart.removeItemFromCartAll(name);
      displayCart();
    } else if (target.classList.contains("minus-item")) {
      var name = target.getAttribute("data-name");
      shoppingCart.removeItemFromCart(name);
      displayCart();
    } else if (target.classList.contains("plus-item")) {
      var name = target.getAttribute("data-name");
      shoppingCart.addItemToCart(name);
      displayCart();
    }
  });

// Item count input
document
  .querySelector(".show-cart")
  .addEventListener("change", function (event) {
    var target = event.target;
    if (target.classList.contains("item-count")) {
      var name = target.getAttribute("data-name");
      var count = parseInt(target.value);
      shoppingCart.setCountForItem(name, count);
      displayCart();
    }
  });

// Initial Display of Cart
displayCart();
