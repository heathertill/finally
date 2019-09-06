import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';

export interface EditProps extends RouteComponentProps<{ id: string }> { }

interface Categories {
    id: number,
    name: string
}

const Edit: React.SFC<EditProps> = ({history, match: { params: { id } } }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [categoryid, setCategoryid] = useState(undefined);
    const [categories, setCategories] = useState<Categories[]>([]);

    const getBook = async () => {
        try {
            console.log('id', id)
            let book = await json(`/api/books/${id}`);
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setCategory(book.category);
            setCategoryid(book.categoryid);
        } catch (e) {
            console.log(e)
        }
    };

    const getCategories = async () => {
        try {
            let cat = await json('/api/category');
            setCategories(cat);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = {
            title,
            author,
            price,
            categoryid
        }
        try {
            let result = await json(`/api/books/${id}`, 'PUT', body)
            if (result) {
                history.push('/books')
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => { getBook(), getCategories() }, []);


    const canDelete = () => {
        if (User.role === 'admin') {
            return <Link to={`/edit/${id}`} className="btn btn-warning">Delete</Link>
        }
    }

    return (
        <section>
            <form className="form-group border shadow p-2 m-3">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} placeholder={title} className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                <label htmlFor="author">Author</label>
                <input type="text" value={author} placeholder={author} className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} />
                <label htmlFor="price">Price</label>
                <input type="number" value={price} placeholder={price} className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} />
                <label htmlFor="category">Category</label>
                <select className="form-control" value={categoryid} placeholder={category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryid(e.target.value)}>
                    <option>{category}</option>
                    {categories.map(cat => {
                        return (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <button className="btn btn-warning m-2" onClick={handleSubmit}>Edit</button>
                {canDelete()}
            </form>
        </section>
    );
}

export default Edit;