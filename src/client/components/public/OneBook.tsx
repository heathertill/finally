import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom'
import { Book } from './Books';
import { json, User } from '../../utils/api';
import { formatter } from '../../utils/currency';

export interface OneBookProps extends RouteComponentProps<{ id: string }> { }

const OneBook: React.SFC<OneBookProps> = ({ match: { params: { id } } }) => {

    const [book, setBook] = useState<Book>({
        id: null,
        title: null,
        author: null,
        price: null,
        category: null,
        categoryid: null,
    });

    const getBook = async () => {
        try {
            let book = await json(`/api/books/${id}`);
            setBook(book)
        } catch (e) {
            console.log(e)
        }
    };
    
    useEffect(() => { getBook() }, [id]);

    const canEdit = () => {
        if (User.role === 'admin') {
            return <Link to={`/edit/${book.id}`} className="btn btn-warning mx-2">Edit Book</Link>
        }
    }
    
    return (
        <section>
            <div key={book.id} className="card border shadow m-3 p-2">
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{formatter.format(book.price)}</p>
                            <p className="card-text">{book.category}</p>
                    {canEdit()}
                    <Link to={'/books'} className="btn btn-warning mx-2">Back to Books</Link>
                        </div>
                    </div>
        </section>
    );
}

export default OneBook;