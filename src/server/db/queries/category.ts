import { connection as knex } from '../index';

const getAll = () => knex('categories').select();
const getOne = (id: number) => knex('categories').where('id', id).select();


export default {
    getAll,
    getOne
}