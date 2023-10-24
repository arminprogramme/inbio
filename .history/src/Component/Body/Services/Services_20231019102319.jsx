import  { Component } from 'react';
import ServicesItem from './ServicesItem.jsx'
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
               <div className="text-white">services</div>
              <div className="grid grid-cols-3 gap-5">
              {this.state.services.map(services => {
                return <ServicesItem key={services.id} />
               })}
              </div>
            </div>
        );
    }
}

export default Services;
