import  { Component } from 'react';
import ServicesItem from './ServicesItem.jsx'
class Services extends Component {

    constructor(props){
        super(props)

        this.state = {
            services : [
                {id : 1 , icon : 'red-color fa fa-bars' , title : 'Business Development' , text : ''},
                {id : 1 , icon : 'red-color fa fa-book' , title : 'App Development' , text : ''},
                {id : 1 , icon : 'red-color fa fa-television' , title : 'Media Development' , text : ''},
            ]
        }
    }
    render() {
        return (
            <div>
               <div className="text-white">services</div>
               {this.state.services.map(services => {
                return console.log(services);
               })}
            </div>
        );
    }
}

export default Services;
