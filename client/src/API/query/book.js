import {gql} from '@apollo/client'

export const GET_ALL_BOOKS = gql`
    query {
        getAllBooks {
            id, bookName, genre, authorName
        }
    }    

`

export const GET_ONE_BOOK = gql`
    query getBook($id: ID){
        getBook(id: $id) {
            id, bookName, genre, authorName
        }
    }    

`