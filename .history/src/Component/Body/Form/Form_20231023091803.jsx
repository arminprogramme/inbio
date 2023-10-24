import  { Component } from 'react';
import './Form.css'
class Form extends Component {
    render() {
        return (
            <div className='py-5'>
                <div className="img-form">
                    <div className="img-form-container">
                        <img src="contact1.webp" alt="" />
                    </div>
                    <div className="img-text-form">
                        <h2 className='text-gray-100'>Nevine Acotanza</h2>
                    </div>
                </div>
                <div className="inputs-form"></div>
            </div>
        );
    }
}

export default Form;
