import { Component } from 'react';

class AwardItem extends Component {
    render() {
        return (
            <div className='award-item text-center'>
                <div className="img-award w-28 text-center">
                <img src={this.props.img} className='w-full text-center' alt="" />
                </div>
                <div className='separator'></div>
                <div className="award-detail">
                    <h2>Sasha Smith</h2>
                </div>
            </div>
        );
    }
}

export default AwardItem;
