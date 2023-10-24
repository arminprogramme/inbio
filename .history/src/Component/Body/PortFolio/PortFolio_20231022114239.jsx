import  { Component } from 'react';
import PortfolioItem from './PortfolioItem.jsx'
import './Portfolio.css'
class PortFolio extends Component {

    constructor(props){
        super(props)

        this.state = {
            PortfolioItems : [
                {id : 1 , title : 'Mobile app landing design & app maintain' , img : 'portfolio-10.webp' , text : '' , likes : 360},
                {id : 2 , title : 'The services provide for design' , img : 'portfolio-11.webp' , text : '' , likes : 360},
                {id : 3 , title : 'Mobile app landing design & Services' , img : 'portfolio-12.webp' , text : '' , likes : 360},
                {id : 4 , title : 'Logo design creativity & Application' , img : 'portfolio-13.webp' , text : '' , likes : 360},
                {id : 5 , title : 'App for tecnology &amp; services' , img : 'portfolio-14.webp' , text : '' , likes : 360},
                {id : 6 , title : 'Design for tecnology & services' , img : 'portfolio-15.webp' , text : '' , likes : 360},
            ]
        }
    }


    render() {
        return (
            <div>
                <div className="title-portfolio text-center">
                    <h5 className='red-color'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                    <h2>My Portfolio</h2>
                </div>
                <div className="portfolio-content pt-10">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {this.state.PortfolioItems.map(portfolio => {
                            return <PortfolioItem key={portfolio.id} {...portfolio}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PortFolio;
