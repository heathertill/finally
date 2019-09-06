import * as React from 'react';
import { Component } from 'react';

export interface BooksProps { }

const Books: React.SFC<BooksProps> = () => {
    return (
        <div>Hello from books</div>
    );
}

export default Books;