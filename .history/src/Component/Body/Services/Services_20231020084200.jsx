import { Component } from 'react';
import ServicesItem from './ServicesItem.jsx'
import './Services.css'
class Services extends Component {

    constructor(props) {
        super(props)

        this.state = {
            services: [
                { id: 1, icon: 'red-color fa fa-bars', title: 'Web Development', text: 'I throw myself down among the tall grass by the stream as I lie close to the earth.' },
                { id: 2, icon: 'red-color fa fa-book', title: 'App Development', text: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.' },
                { id: 3, icon: 'red-color fa fa-television', title: 'Media Development', text: 'I throw myself down among the tall grass by the stream as I lie close to the earth.' },
            ]
        }
    }
    render() {
        return ( <
            div >
            <
            div className = "grid  grid-cols-1 lg:grid-cols-3 " > {
                this.state.services.map(services => {
                    return <ServicesItem key = { services.id } {...services }
                    />
                })
            } <
            /div> <
            /div>
        );
    }
}

export default Services;