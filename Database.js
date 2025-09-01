export class Database {
    #storage = {
        authors: [],
        users: [],
        books: [],
        posters: [],    
        orders: []
    }

    find(key) {
        return this.#storage[key] // Retorna um array com informaçãos salvas no armazenamento (books, posters e etc)
    }

    saveAuthor(author) {
        const authorExists = this.#storage.authors.find(a => a.name === author.name) // Verifica se o autor já existe no armazenamento
        if (!authorExists) this.#storage.authors.push(author) // Se não existe, "Pusha" esse autor no array de authors em armazenamento
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName) // Cria um método para verificar se um livro já existe
    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === posterName) // Cria um método só para verificar se um livro já existe
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name) // Usa o método verificador de livro existente
        if (!bookExists) this.#storage.books.push(book) // Se não existe, "Pusha" esse livro no array de books em armazenamento
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name) // Usa o método verificador de poster existente
        if (!posterExists) this.#storage.posters.push(poster) // Se não existe, "Pusha" esse poster no array de posters em armazenamento
    }

    addBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName) // Usa o método verificador de livro existente e retorna um book
        book?.addToStock(quantity) // Se exister um livro com o nome informado, usa o método addToStock de Product
    }

    addPostersToStock(PosterName, quantity) {
        const poster = this.findPosterByName(posterName) // Usa o método verificador de poster existente e retorna um poster
        poster?.addToStock(quantity) // Se exister um poster com o nome informado, usa o método addToStock de Product
    }

    removeBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName) // Usa o método verificador de livro existente e retorna um book
        book?.removeFromStock(quantity) // Se exister um livro com o nome informado, usa o método removeFromStock de Product
    }

    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName) // Usa o método verificador de poster existente e retorna um poster
        poster?.removeFromStock(quantity) // Se exister um poster com o nome informado, usa o método removeFromStock de Product
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.name === user.name) // Verifica se o usuario já existe no armazenamento
        if (!userExists) this.#storage.users.push(user) // Se não existe, "Pusha" esse usuario no array de users em armazenamento
    }

    saveOrder(order) {
        this.#storage.orders.push(order) // "Pusha" esse pedido no array de orders em armazenamento
    } 

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.orders.map(order => order.data)) // Como os atributos de order estão privados, usa um map para criar um novo array em que os elementos são objetos que retornaram usando o getter data de Order 
        console.table(this.#storage.users)
    }
}