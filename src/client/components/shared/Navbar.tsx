import * as React from 'react';
import { Component } from 'react';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <section>
            <ul className="nav"></ul>
        </section>
    );
}

export default Navbar;