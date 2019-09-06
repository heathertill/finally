import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { json } from '../../utils/api';

export interface NewBookProps extends RouteComponentProps { }

interface Categories {
    id: number,
    name: string
}

const NewBook: React.SFC<NewBookProps> = ({history}) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [categoryid, setCategoryid] = useState(undefined);
    const [categories, setCategories] = useState<Categories[]>([]);

    const getCategories = async () => {
        try {
            let cat = await json('/api/category');
            setCategories(cat);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        let body = {
            title,
            author,
            price,
            categoryid
        }
        e.preventDefault();
        try {
            let newBook = await json('/api/books', 'POST', body)
            if (newBook) {
                history.push('/books')
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => { getCategories() }, []);

    return (
        <section>
            <form className="form-group border shadow p-2 m-3"
            onSubmit={(e) => handleSubmit(e)}>
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
                    <option>Select a category</option>
                    {categories.map(cat => {
                        return (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <button type="submit" className="btn btn-warning m-2">Edit</button>
            </form>
        </section>
    );
}

export default NewBook;