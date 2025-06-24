
let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart");
}
function toggleCart() {
    const modal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    modal.classList.toggle("visible");
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - ${item.price}</li>`).join('');
}
document.getElementById("checkoutForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Order placed successfully!");
    cart = [];
    toggleCart();
};
