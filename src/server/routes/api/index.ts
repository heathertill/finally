import * as express from 'express';

import bookRouter from './books';
import categoryRouter from './category';

const router = express.Router();

router.use('/books', bookRouter);
router.use('/category', categoryRouter);

export default router;