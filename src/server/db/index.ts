import config from '../config';
import * as knex from 'knex';

import Books from './queries/books';
import Category from './queries/category';
import Users from './queries/users';
import Tokens from './queries/tokens';

export const connection = knex(config.knex);

export default {
    Books,
    Category,
    Users,
    Tokens
}

