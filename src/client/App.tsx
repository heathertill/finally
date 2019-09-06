import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './scss/app';

import Navbar from './components/shared/Navbar';
import Books from './components/public/Books';


const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Books} />
                </Switch>
            </main>
        </BrowserRouter>
    );
};

export default App;

export interface AppProps { }