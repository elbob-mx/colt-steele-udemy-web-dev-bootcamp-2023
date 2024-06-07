// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("#form");
const formContainer = document.querySelector("#list");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const qtyInput = form.elements.qty;
    const productInput = form.elements.product;
    addProduct(qtyInput.value, productInput.value);
    qtyInput.value = "";
    productInput.value = "";
});

const addProduct = (qty, product) => {
    const newProduct = document.createElement("li");
    const productName = document.createElement("b");
    productName.append(product);
    newProduct.append(`${qty} ${product}`);
    formContainer.append(newProduct);
};
