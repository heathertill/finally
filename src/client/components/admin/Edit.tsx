import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';



export interface EditProps extends RouteComponentProps<{ id: string }> { }

interface Categories {
    id: number,
    name: string
}

const Edit: React.SFC<EditProps> = ({ match: { params: { id } } }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [categoryid, setCategoryid] = useState(undefined);
    const [categories, setCategories] = useState<Categories[]>([]);

    const getBook = async () => {
        try {
            let book = await json(`/api/books/${id}`);
            let cats = await json('/api/catagory');
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setCategory(book.category);
            setCategoryid(book.categoryid);
            setCategories(cats)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => { getBook() }, []);


    const canDelete = () => {
        if (User.role === 'admin') {
            return <Link to={`/edit/${id}`} className="btn btn-warning">Edit</Link>
        }
    }

    return (
        <section>
            <form className="form-group">
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
                <select className="form-control m-2" value={categoryid} placeholder={category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryid(e.target.value)}>
                    {categories.map(cat => {
                        return (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <button className="btn btn-warning m-2" onClick={}>Edit</button>
                <button className="btn btn-warning m-2" onClick={}>Delete</button>
            </form>
        </section>
    );
}

export default Edit;