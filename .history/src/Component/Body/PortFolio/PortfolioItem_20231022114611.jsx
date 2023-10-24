import { Component } from 'react';
import  './PortfolioItem.css'
class PortfolioItem extends Component {
    render() {
        return (
            <div className='portfolio-item m-5'>
               <div className="img-portfolio-container">
               <img src={this.props.img} className='h-full' alt="" />
               </div>
              <div className="detail-portfolio py-5">
              <div className="small-detail flex justify-between py-3 ">
                <h2 className='major red-color font-bold'>{this.props.text}</h2>
                <div className="icon-portfolio flex item-center justify-between">
                    <i className='px-2 fa fa-heart'></i>
                    <p>250</p>
                </div>
               </div>
                <h2 className='text-2xl font-bold text-gray-200'>The services provide for design</h2>
              </div>
            </div>
        );
    }
}

export default PortfolioItem;
