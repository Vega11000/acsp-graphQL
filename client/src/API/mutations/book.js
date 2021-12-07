import {gql} from '@apollo/client'

export const CREATE_BOOK = gql`
    mutation createBook($input: BookInput) {
        createBook(input: $input) {
            id, bookName, genre, authorName
        }
    }
`