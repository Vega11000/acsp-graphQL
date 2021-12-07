import {gql} from '@apollo/client'

export const CREATE_AUTHOR = gql`
    mutation createAuthor($input: AuthorInput) {
        createAuthor(input: $input) {
            id, authorName
        }
    }
`