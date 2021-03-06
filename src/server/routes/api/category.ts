import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let categories = await queries.Category.getAll();
        res.json(categories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id
    try {
        let [category] = await queries.Category.getOne(id);
        res.json(category);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
});

export default router;