import  { Component } from 'react';
import Services from './Services/Services.jsx'
import About from './About/About.jsx'
import './Body.css'
class Body extends Component {
    render() {
        return (
            <>
            <div className='black-bg '>
                <div className="limit-width">
                    <Services/>
                    <About/>
                </div>
                <div className="girl-bg">
                </div>
                <div className="limit-width">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, hic ut. Amet molestias nostrum eaque dignissimos architecto explicabo similique, optio soluta, officiis, ex est? Iusto similique ipsa accusamus rem tempora.</p>
                </div>
            </div>
            </>
        );
    }
}

export default Body;
