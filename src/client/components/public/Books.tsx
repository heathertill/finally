import * as React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { json } from '../../utils/api';
import { formatter } from '../../utils/currency'

export interface BooksProps { }

export interface Book {
    id: number,
    title: string,
    author: string,
    price: number,
    category: string,
    categoryid: number
}

const Books: React.SFC<BooksProps> = () => {
    const [books, setBooks] = useState<Book[]>([]);
    
    const getBooks = async () => {
        try {
            let books = await json('/api/books');
            setBooks(books);
        } catch (e) {
            console.log(e)
        }
    };
    useEffect(() => { getBooks() }, []);
    return (
        <section>
            {books.map(book => {
                return (
                    <div key={book.id} className="card border shadow m-3 p-2">
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{formatter.format(book.price)}</p>
                            <p className="card-text">{book.category}</p>
                            <Link to={`/books/${book.id}`} className="btn btn-warning">See Book</Link>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Books;