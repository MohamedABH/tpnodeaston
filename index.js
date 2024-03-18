import readlineSync from "readline-sync";
import product from "./src/product.js";

while(true){
    let operation = readlineSync.question("a: add, r: remove, u: update, s: show\n");
    
    switch(operation) {
        case "a": console.log("Adding product:");
            product.addProduct();
            break;
        case "r": console.log("Removing product:");
            product.removeProduct();
            break;
        case "u": console.log("Updating product:");
            product.updateProduct();
            break;
        case "s": console.log("All current products:\n");
            product.showProducts();
    }
}