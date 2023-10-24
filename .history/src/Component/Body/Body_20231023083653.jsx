import  { Component } from 'react';
import Services from './Services/Services.jsx'
import About from './About/About.jsx'
import PortFolio from './PortFolio/PortFolio.jsx'
import Award from './Award/Award.jsx'
import './Body.css'
class Body extends Component {
    render() {
        return (
            <>
            <div className='black-bg  '>
                <div className="limit-width">
                    <Services/>
                    <About/>
                </div>
                <div className="girl-bg"></div>
                <div className="limit-width">
                   <PortFolio/>
             
                </div>
            </div>
            </>
        );
    }
}

export default Body;