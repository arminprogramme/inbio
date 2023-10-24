import  { Component } from 'react';
import Button from '../Buttons/ButtonSpecial'
import './Form.css'
class Form extends Component {
    render() {
        return (
           <div>
            <div className="title-contact text-center">
                <h6 className='red-color'>CONTACT</h6>
                <h2>Contact With Me</h2>
            </div>
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
                            <div>Phone : <span>055215500</span></div>
                            <div>Email : <span className='email-span'>admin@example.com</span></div>
                        </div>
                        <div className="icon-img-form">
                            <div className="title red-color text-lg py-2">Find With Me</div>
                            <div className="flex justify-between w-64">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-linkedin"></i>
                                <i className="fa fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inputs-form">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   dark:   " placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   dark:   " placeholder="Doe" required/>
        </div>
        
                    </div>
                    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="john.doe@company.com" required/>
    </div> <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  " placeholder="john.doe@company.com" required/>
    </div> 
    
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white    " placeholder="Write your thoughts here..."></textarea>

                <Button/>
                </div>
            </div>
           </div>
        );
    }
}

export default Form;
