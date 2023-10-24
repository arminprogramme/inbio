import  { Component } from 'react';
import Services from './Services/Services.jsx'

class Body extends Component {
    render() {
        return (
            <>
            <div className='black-bg limit-width'>
                <Services/>
            </div>
            </>
        );
    }
}

export default Body;
