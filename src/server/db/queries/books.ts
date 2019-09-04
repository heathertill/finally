import { connection as knex } from '../index';

const all = () => knex('books').select('books.id', 'books.title', 'books.author', 'books.price', 'categories.name as category', 'categories.id as categoryid').join('categories', 'books.categoryid', '=', 'categories.id');
const one = (id: number) => knex('books').select('books.id', 'books.title', 'books.author', 'books.price', 'categories.name as category', 'categories.id as categoryid').join('categories', 'books.categoryid', '=', 'categories.id').where('books.id', id);
const newBook = (bookObject: any) => knex('books').insert(bookObject);
const updateBook = (bookObject: any, id: number) => knex('books').where('id', id).update(bookObject);
const deleteBook = (id: number) => knex('books').where('id','=', id).del();


export default {
    all,
    one,
    newBook,
    updateBook,
    deleteBook
}