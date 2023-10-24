import  { Component } from 'react';
import ButtonSpecial from '../Buttons/ButtonSpecial.jsx'
import   './About.css'
class About extends Component {

    constructor(props){
        super(props)

        this.state= {
            title : 'Download My CV'
        }
    }
    render() {
        return (
            <div className=' my-10 py-10'>
                <div className="about-container  grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="img-about">
                        <div className="inner-img-about">
                            <img src="about-5.webp" className='rounded' alt="" />
                        </div>
                    </div>
                    <div className="content-about">
                        <h5 className='red-color'>VISIT MY PORTFOLIO & HIRE ME</h5>
                        <h2>About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati ius quasi doloribus illum minus fugit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit,</p>
                    
                       <div className="mx-2 my-8 button-about">
                       <ButtonSpecial title={this.state.title}/>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
