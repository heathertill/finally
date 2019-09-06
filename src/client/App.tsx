import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './scss/app';

import Navbar from './components/shared/Navbar';
import Jumbo from './components/shared/Jumbo';
import Books from './components/public/Books';
import OneBook from './components/public/OneBook';
import Edit from './components/admin/Edit';
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import NewBook from './components/admin/NewBook';


const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Jumbo />
                <Switch>
                    <Route exact path='/books' component={Books} />
                    <Route exact path='/books/:id' component={OneBook} />
                    <Route exact path='/edit/:id' component={Edit} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/new' component={NewBook} />
                </Switch>
            </main>
        </BrowserRouter>
    );
};

export default App;

export interface AppProps { }