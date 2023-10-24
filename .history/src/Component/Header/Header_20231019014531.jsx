import  { Component } from 'react';
import NavBar from './Navbar.jsx'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="banner-header">
                    <h1>KRISTINA SOMOLYER</h1>
                </div>
            </div>
        );
    }
}

export default Header;
