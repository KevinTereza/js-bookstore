import { Author } from "./classes/Author.js";
import { Book } from "./classes/Book.js";
import { Order } from "./classes/Order.js";
import { Poster } from "./classes/Poster.js";
import { User } from "./classes/User.js";
import { Database } from "./Database.js";

export class App {
    static #dataBase = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password) // Cria uma instancia de User
        App.#dataBase.saveUser(user) // Adiciona esse novo usuario ao database da classe usando um método da classe Database
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio) // Cria uma instancia de Author
        App.#dataBase.saveAuthor(author) // Adiciona esse novo author ao database da classe usando um método da classe Database
    }

    createBook(description, price, inStock = 0, title, synopsis, genre, pages, author) {
        const book = new Book(description, price, inStock, title, synopsis, genre, pages, author) // Cria uma instancia de Book
        App.#dataBase.saveBook(book) // Adiciona esse livro ao database da classe usando o metodo saveBook da classe Database
    }

    createPoster(name, description, price, inStock = 0, width, height) {
        const poster = new Poster(name, description, price, inStock, width, height) // Cria uma instancia de Poster
        App.#dataBase.savePoster(poster) // Adiciona esse poster ao database da classe usando o metodo saveBook da classe Database
    }

    createOrder(items, user) {
        const order = new Order(items, user) // Cria uma instancia de Order
        App.#dataBase.saveOrder(order) // Adiciona esse pedido ao database da classe usando o metodo saveOrder da classe Database
        order.data.items.forEach(({ product, quantity }) => { // Passa por cada elemento do array privado items e desestrutura cada elemento em produto e quantidade
            if (product instanceof Book) { // Se o elemento/produto for uma instancia de Book
                App.#dataBase.removeBooksToStock(product.name, quantity) // Remove a quantidade de livros comprados no pedido
            } else if (product instanceof Poster) { // Se o elemento/produto for uma instancia de Poster
                App.#dataBase.removePostersFromStock(product.name, quantity) // Remove a quantidade de posters comprados no pedido
            }
        });
    }

    getUsers() {
        return App.#dataBase.find("users") // Procura e retorna o array users
    }

    getAuthors() {
        return App.#dataBase.find("authors") // Procura e retorna o array users
    }

    getOrders() {
        return App.#dataBase.find("orders") // Procura e retorna o array orders 
    }

    getBooks() {
        return App.#dataBase.find("books") // Procura e retorna o array books
    }

    addBook(bookName, quantity) {
        App.#dataBase.addBooksToStock(bookName, quantity) // Adiciona mais quantidades no estoque de um livro
    }

    addPoster(posterName, quantity) {
        App.#dataBase.addPostersToStock(posterName, quantity) // Adiciona mais quantidades no estoque de um poster
    }

    showDatabase() {
        App.#dataBase.showStorage() // Mostra tudo que está armazenado no database da classe App
    }
}