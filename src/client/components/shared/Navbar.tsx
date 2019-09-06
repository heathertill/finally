import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <section>
            <ul className="nav bg-dark my-3 p-2 justify-content-between">
                <div className="nav">
                    <li className="nav-item">
                        <Link className="text-white mx-3" to='/books'>Books</Link>
                    </li>
                </div>
            </ul>
        </section>
    );
}

export default Navbar;