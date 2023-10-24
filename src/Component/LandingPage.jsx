import  { Component } from 'react';
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'
import Footer from './Footer/Footer.jsx'
class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;
