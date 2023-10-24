import { Component } from 'react';

class PortfolioItem extends Component {
    render() {
        return (
            <div className='portfolio-item'>
                <img src="portfolio-10.webp" alt="" />
               <div className="small-detail flex justify-between">
                <h2>Figma</h2>
                <div className="icon-portfolio flex item-center">
                    <i className='fa fa-heart'></i>
                    <p>250</p>
                </div>
               </div>
                <h2>The services provide for design</h2>
            </div>
        );
    }
}

export default PortfolioItem;
