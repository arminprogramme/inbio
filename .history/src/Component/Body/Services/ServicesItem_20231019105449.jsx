import { Component } from 'react';

class ServicesItem extends Component {
    render() {
        return (
            <div className='services-item'>
                <div className="icon-services">
                    <i className={this.props.icon}></i>
                </div>
                <div className="content-services">
                <h2 className='font-bold'>App Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eum, eaque voluptas ipsa minus quo libero, repellendus magnam similique molestias rerum vitae accusantium maxime voluptatem velit. Laborum dolore omnis labore?</p>
                </div>
            </div>
        );
    }
}

export default ServicesItem;
