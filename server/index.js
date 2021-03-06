const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const books = [{id: 2, bookName: "Fight Club", genre: "Comedy", authorName: "Chack Palanic"}]

const app = express()
app.use(cors())

const createBook = (input) => {
    const id = Date.now()
    return {
        id, ...input
    }
}

const root = {
    getAllBooks: () => {
        return books
    },
    getBook: ({id}) => {
        return books.find(book => book.id == id)
    },
    createBook: ({input}) => {
        const book = createBook(input)
        books.push(book)
        return book
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(3001, () => console.log('server started on port 3001'))