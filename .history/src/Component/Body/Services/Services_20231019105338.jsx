import  { Component } from 'react';
import ServicesItem from './ServicesItem.jsx'
import './Services.css'
class Services extends Component {

    constructor(props){
        super(props)

        this.state = {
            services : [
                {id : 1 , icon : 'red-color fa fa-bars' , title : 'Business Development' , text : ''},
                {id : 2 , icon : 'red-color fa fa-book' , title : 'App Development' , text : ''},
                {id : 3 , icon : 'red-color fa fa-television' , title : 'Media Development' , text : ''},
            ]
        }
    }
    render() {
        return (
            <div>
              <div className="grid  grid-cols-1 lg:grid-cols-3 gap-16">
              {this.state.services.map(services => {
                return <ServicesItem key={services.id} {...services} />
               })}
              </div>
            </div>
        );
    }
}

export default Services;
