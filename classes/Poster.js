import { Product } from "../classes/Product.js"

export class Poster extends Product {
    constructor(name, description, price, inStock = 0, width, height) {
        super(`Poster: ${name}`, description, price, inStock) 
        this.width = width
        this.height = height
    }
}