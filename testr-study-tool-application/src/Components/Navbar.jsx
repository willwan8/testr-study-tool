import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-center'>
                <ul className='navbar-links'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/Login'>Login</a>
                    </li>
                    <li>
                        <a href='/SignUp'>Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;