import  { Component } from 'react';
import Services from './Services/Services.jsx'
import About from './About/About.jsx'
import PortFolio from './PortFolio/PortFolio.jsx'
import Award from './Award/Award.jsx'
import Form from './Form/Form.jsx'
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
                   <Award/>
                   <Form/>
                   <div className="separator pt-10"></div>
                </div>
            </div>
            </>
        );
    }
}

export default Body;
