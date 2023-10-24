import { Component } from 'react';
import  './PortfolioItem.css'
class PortfolioItem extends Component {
    render() {
        return (
            <div className='portfolio-item'>
               <div className="img-portfolio-container">
               <img src="portfolio-10.webp" className='h-full' alt="" />
               </div>
               <div className="small-detail flex justify-between">
                <h2 className='major red-color font-bold'>Figma</h2>
                <div className="icon-portfolio flex item-center justify-between">
                    <i className='px-2 fa fa-heart'></i>
                    <p>250</p>
                </div>
               </div>
                <h2>The services provide for design</h2>
            </div>
        );
    }
}

export default PortfolioItem;
