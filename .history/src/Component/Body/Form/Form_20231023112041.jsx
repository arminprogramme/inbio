import  { Component } from 'react';
import './Form.css'
class Form extends Component {
    render() {
        return (
            <div className='py-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className="img-form">
                    <div className="img-form-container">
                        <img src="contact1.webp" className='w-full' alt="" />
                    </div>
                    <div className="img-text-form">
                        <h2>Nevine Acotanza</h2>
                        <p>Chief Operating Officer</p>
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <div className="contact-img-form">
                            <div>Phonee : <span>055215500</span></div>
                            <div>Phonee : <span>055215500</span></div>
                        </div>
                        <div className="icon-img-form">
                            <div className="title">Find With Me</div>
                            <div className="flex">
                                <div className="fa fa-facebook"></div>
                                <div className="fa fa-linkedin"></div>
                                <div className="fa fa-instagram"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inputs-form"></div>
            </div>
        );
    }
}

export default Form;
