import  { Component } from 'react';
import   './About.css'
class About extends Component {
    render() {
        return (
            <div>
                <div className="about-container my-52 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="img-about">
                        <div className="inner-img-about">
                            <img src="about-5.webp" className='rounded' alt="" />
                        </div>
                    </div>
                    <div className="content-about">
                        <h5 className='red-color'>VISIT MY PORTFOLIO & HIRE ME</h5>
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati ius quasi doloribus illum minus fugit.</p>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
