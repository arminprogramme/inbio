import { Component } from 'react';

class ServicesItem extends Component {
    render() {
        return (
            <div className='services-item'>
                <div className="icon-services">
                    <i className={this.props.icon}></i>
                </div>
                <div className="content-services">
                <h2 className='font-bold'>{this.props.title}</h2>
                <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default ServicesItem;
