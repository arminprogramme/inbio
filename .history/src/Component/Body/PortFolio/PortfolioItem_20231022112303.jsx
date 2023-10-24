import { Component } from 'react';
import  './PortfolioItem.css'
class PortfolioItem extends Component {
    render() {
        return (
            <div className='portfolio-item'>
               <div className="img-portfolio-container py-3">
               <img src="portfolio-10.webp" alt="" />
               </div>
               <div className="small-detail flex justify-between">
                <h2>Figma</h2>
                <div className="icon-portfolio flex item-center justify-between">
                    <i className='pt-1 fa fa-heart'></i>
                    <p>250</p>
                </div>
               </div>
                <h2>The services provide for design</h2>
            </div>
        );
    }
}

export default PortfolioItem;
