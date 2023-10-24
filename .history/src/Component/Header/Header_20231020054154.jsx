import  { Component } from 'react';
import NavBar from './Navbar.jsx'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
              
                <div className="banner-header text-center">
                    <h1 className='font-bold text-white'>KRISTINA SOMOLYER</h1>
                    <p>American Supermodel & Entrepreneur</p>
                </div>
            </div>
        );
    }
}

export default Header;
