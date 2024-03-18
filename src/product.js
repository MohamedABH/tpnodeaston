import readlineSync from "readline-sync";

let products = {};

const addProduct = () => {
    const name = readlineSync.question("Name: ");
    const price = readlineSync.question("Price: ");
    const quantity = readlineSync.question("Quantity: ");

    products[name] = { price: price, quantity: quantity };
}

const removeProduct = () => {
    const name = readlineSync.question("Name: ");

    if (products[name] == undefined) {
        console.log("No such product");
        return
    }

    delete products[name];
}

const updateProduct = () => {
    const name = readlineSync.question("Name: ");

    if (products[name] == undefined) {
        console.log("No such product");
        return
    }

    const price = readlineSync.question("Price: ");
    const quantity = readlineSync.question("Quantity: ");

    products[name] = { price: price, quantity: quantity };
}

const showProducts = () => {
    Object.keys(products).forEach(key => {
        console.log(`Name: ${key}\nPrice: ${products[key].price}\nQuantity: ${products[key].quantity}\n`);
    });
}

export default { addProduct, removeProduct, updateProduct, showProducts }