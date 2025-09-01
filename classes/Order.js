export class Order {
    #total
    #items
    #user
    constructor(items, user) {
        items.forEach( ({ product, quantity  }) => {
            if (quantity > product.inStock) { // se a quantidade do pedido for maior que o que tem no estoque, ele joga um erro
                throw new Error(`Não temos esta quantidade de "${product.name}" para vender.`);
            }
        });
        this.#items = items // Continua o código caso a quantidade esteja dentro do limite
        this.#user = user
        this.#total = items.reduce((sum, item) => sum + (item.quantity * item.product.price), 0) // calcula a soma do valor do produto multiplicado pela quantidade do pedido
    }

    get data() { //  getter que retorna um obj com os atributos privados
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}