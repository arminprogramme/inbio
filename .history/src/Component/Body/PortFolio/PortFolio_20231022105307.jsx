import  { Component } from 'react';
import PortfolioItem from './PortfolioItem.jsx'
import './Portfolio.css'
class PortFolio extends Component {
    render() {
        return (
            <div>
                <div className="title-portfolio text-center">
                    <h5 className='red-color'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                    <h2>My Portfolio</h2>
                </div>
                <div className="portfolio-content">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <PortfolioItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortFolio;
