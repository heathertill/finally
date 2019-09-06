import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './scss/app';

import Navbar from './components/shared/Navbar';
import Jumbo from './components/shared/Jumbo';
import Books from './components/public/Books';
import OneBook from './components/public/OneBook';


const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Jumbo />
                <Switch>
                    <Route exact path='/books' component={Books} />
                    <Route exact path='/books/:id' component={OneBook} />
                </Switch>
            </main>
        </BrowserRouter>
    );
};

export default App;

export interface AppProps { }