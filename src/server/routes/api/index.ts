import * as express from 'express';

import { checkToken } from '../../utils/routerMiddleware';

import bookRouter from './books';
import categoryRouter from './category';
import userRouter from './users';

const router = express.Router();

router.use(checkToken);

router.use('/books', bookRouter);
router.use('/category', categoryRouter);
router.use('/users', userRouter);

export default router;