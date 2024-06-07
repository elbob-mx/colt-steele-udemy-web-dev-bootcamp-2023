// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("#form");
const formContainer = document.querySelector("#list");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // create list
    const qtyInput = document.getElementById("qty").value;
    const productInput = document.getElementById("product").value;

    // create product for list
    const addProduct = document.createElement("li");
    addProduct.textContent = `${qtyInput} ${productInput}`;

    // add product to list
    formContainer.appendChild(addProduct);

    // clean form
    form.reset();
});
