const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
    type Author {
        id: ID
        authorName: String
        books: [Book]
    }
    type Book {
        id: ID
        bookName: String
        genre: String
        author: Author
        authorName: String
    }
    
    input BookInput {
        id: ID
        bookName: String!
        genre: String
        authorName: String
    }
    
    type Query {
        getAllBooks: [Book]
        getBook(id: ID): Book
    }
    type Mutation {
        createBook(input: BookInput): Book
    }

`)

module.exports = schema