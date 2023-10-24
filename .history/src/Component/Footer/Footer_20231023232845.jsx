import  { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className='black-bg'>
                <div className="limit-width text-center">
                    <div className="img-footer">
                    <img src="logo.webp" alt="" />
                    </div>
                    <div className="text-footer text-lg">
                    © 2023.All rights reserved by <a href="">Armin</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer;
