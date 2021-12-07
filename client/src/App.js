import React, {useEffect, useState} from 'react';
import './App.css'
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_BOOK} from "./API/mutations/book";
import {GET_ALL_BOOKS, GET_ONE_BOOK} from "./API/query/book";

const App = () => {
    const {data: allBooks, loading, error, refetch: refetchBooks} = useQuery(GET_ALL_BOOKS)
    const {data:oneBook, loading: loadingOneBook} = useQuery(GET_ONE_BOOK, {
        variables: {
            id: 1
        }
    })

    const [newBook] = useMutation(CREATE_BOOK)

    const [authorName, setAuthorName] = useState('')

    const [books, setBooks] = useState([])
    const [bookName, setBookName] = useState('')
    const [genre, setGenre] = useState('')


    useEffect(() => {
        if (!loading) {
            setBooks(allBooks.getAllBooks)
        }
    }, [allBooks])

    const addBook = (e) => {
        e.preventDefault()
        newBook({
            variables: {
                input: {
                    bookName, genre, authorName
                }
            }
        }).then(({oneBook}) => {
            console.log(oneBook)
            setBookName('')
            setGenre('')
            setAuthorName('')
        })
    }

    const getAllBooks = e => {
        e.preventDefault()
        refetchBooks()
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="App">
            <header className="App-header">
            <form>
                <input value={bookName} onChange={e => setBookName(e.target.value)} type="text" placeholder="bookName"/>
                <input value={genre} onChange={e => setGenre(e.target.value)} type="text" placeholder="genre"/>
                <input value={authorName} onChange={e => setAuthorName(e.target.value)} type="text" placeholder="authorName"/>
                <div>
                    <button onClick={(e) => addBook(e) }>Add</button>
                    <button onClick={e => getAllBooks(e)}>Get</button>
                </div>
            </form>
            <div>
                {books.map(book =>
                    <div className="user">{book.id}. {book.bookName} - {book.genre} - {book.authorName}</div>
                )}
            </div>
            </header>
        </div>
    );
};

export default App;