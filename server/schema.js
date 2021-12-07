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
    
    input AuthorInput {
        id: ID
        authorName: String
        books: [BookInput]
    }
    input BookInput {
        id: ID
        bookName: String!
        genre: String
        authorName: String
    }
    
    type Query {
        getAllAuthors: [Author]
        getAuthor(id: ID): Author
        getAllBooks: [Book]
        getBook(id: ID): Book
    }
    type Mutation {
        createAuthor(input: AuthorInput): Author
        createBook(input: BookInput): Book
    }

`)

module.exports = schema