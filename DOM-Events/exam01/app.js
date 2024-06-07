// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("#form");
const formContainer = document.querySelector("#list");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const qtyInput = form.elements.qty;
    const productInput = form.elements.product;
    addProduct(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = "";
});

const addProduct = (product, qty) => {
    const newProduct = document.createElement("li");
    const productName = document.createElement("b");
    productName.append(product);
    newProduct.append(productName);
    newProduct.append(`${product} ${qty}`);
    formContainer.append(newProduct);
};
