import  { Component } from 'react';
import NavBar from './Navbar.jsx'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="banner-header text-center">
                    <h1 className='font-bold text-white'>KRISTINA SOMOLYER</h1>
                </div>
            </div>
        );
    }
}

export default Header;
