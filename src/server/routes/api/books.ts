import { Router } from 'express';
import queries from '../../db';

import { isAdmin } from '../../utils/routerMiddleware';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let books = await queries.Books.all();
        res.json(books);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id
    try {
        let [book] = await queries.Books.one(id);
        res.json(book);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', isAdmin, async (req, res, next) => {
    let body = req.body
    try {
        let newBook = await queries.Books.newBook(body);
        res.json(newBook);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
});

router.put('/:id', isAdmin, async (req, res, next) => {
    let id = req.params.id
    let body = req.body;
    try {
        await queries.Books.updateBook(body, id)
        res.json({ message: 'Book updated!' })
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
});

router.delete('/:id',isAdmin, async (req, res, next) => {
    let id = req.params.id;
    try {
        await queries.Books.deleteBook(id);
        res.json({ message: 'Book deleted!' })
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
});

router.post('/', async (req, res, next) => {
    try {

    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
});

export default router;