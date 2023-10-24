import  { Component } from 'react';
import   './About.css'
class About extends Component {
    render() {
        return (
            <div>
                <div className="about-container my-52 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="img-about">
                        <div className="inner-img-about">
                            <img src="about-5.webp" alt="" />
                        </div>
                    </div>
                    <div className="content-about">
                        <h5 className='red-color'>VISIT MY PORTFOLIO & HIRE ME</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
