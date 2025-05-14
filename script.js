document.querySelector('.burger').addEventListener("click", function(){
    document.querySelector('.main').classList.toggle("active");
});



document.querySelector(".bir").addEventListener("click", function() {
    carts("1984", 1.5);
});
document.querySelector(".eki").addEventListener("click", function() {
    carts("The Hobbit", 2.0);
});
document.querySelector(".ush").addEventListener("click", function() {
    carts("To Kill a Mockingbird", 2.5);
});
document.querySelector(".tort").addEventListener("click", function() {
    carts("Pride and Prejudice", 3.0);
});
document.querySelector(".bes").addEventListener("click", function() {
    carts("Moby-Dick", 1.5);
});
document.querySelector(".alty").addEventListener("click", function() {
    carts("War and Peace", 1.0);
});
document.querySelector(".zheti").addEventListener("click", function() {
    carts("The Great Gatsby", 2.5);
});
document.querySelector(".sekiz").addEventListener("click", function() {
    carts("The Catcher in the Rye", 2.0);
});
document.querySelector(".tokuz").addEventListener("click", function() {
    carts("Lorem", 1.0);
});
document.querySelector(".on").addEventListener("click", function() {
    carts("OOne", 2.0);
});
document.querySelector(".onbir").addEventListener("click", function() {
    carts("TWO", 2.5);
});
document.querySelector(".oneki").addEventListener("click", function() {
    carts("Sony", 1.5);
});


let cart = [];
let total = 0;

function carts(name, price) {
    let kitaptar = cart.find((product) => product.name === name);
    if (kitaptar) {
        kitaptar.sany += 1;
    } else {
        cart.push({ name: name, price: price, sany: 1 });
    }
    show();
};

function show() {
    box = document.createElement("div");
    box.className = "cart-box";
    document.body.appendChild(box);

    box.innerHTML = "<h3>Your Rental Cart</h3>";
    total = 0;
    for (let i = 0; i < cart.length; i++) {
        box.innerHTML += `
            <p>x${cart[i].sany} ${cart[i].name} - $${(cart[i].price * cart[i].sany)}</p>
        `;
        total += cart[i].price * cart[i].sany;
    }
    box.innerHTML += `<p>Total: $${total}</p>`;
};