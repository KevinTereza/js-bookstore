import { App } from "./App.js"

const app = new App()

// Criando usuários
app.createUser("Kevin", "kevin@email.com", "123456")
app.createUser("Maria", "maria@email.com", "654321")

// Criando autores
app.createAuthor("J. R. R. Tolkien", "Britânico", "Autor de O Senhor dos Anéis")
app.createAuthor("George R. R. Martin", "Americano", "Autor de As Crônicas de Gelo e Fogo")

// Pegando autores criados
const authors = app.getAuthors()

// Criando livros
app.createBook(
  "Livro de fantasia épica",
  50,
  10,
  "O Senhor dos Anéis",
  "Uma jornada pela Terra Média",
  "Fantasia",
  1200,
  authors[0]
)

app.createBook(
  "Livro de fantasia política",
  60,
  5,
  "As Crônicas de Gelo e Fogo",
  "A guerra pelo Trono de Ferro",
  "Fantasia",
  900,
  authors[1]
)

// Criando posters
app.createPoster("Poster da Terra Média", "Mapa ilustrado", 30, 8, "60cm", "90cm")
app.createPoster("Poster de Westeros", "Mapa detalhado", 25, 6, "50cm", "80cm")

// Pegando usuários e produtos
const users = app.getUsers()
const books = app.getBooks()

// Criando um pedido (usuário compra 1 livro e 1 poster)
app.createOrder(
  [
    { product: books[0], quantity: 1 },
    { product: books[1], quantity: 2 }
  ],
  users[0]
)

// Mostrar tudo que está no "banco de dados"
app.showDatabase()
