import { Component } from 'react';

class ServicesItem extends Component {
    render() {
        return (
            <div>
                <div className="icon-services">
                    <i className='fa fa-bars red-color'></i>
                </div>
                <div className="content-services">
                <h2>App Development</h2>
                </div>
            </div>
        );
    }
}

export default ServicesItem;
