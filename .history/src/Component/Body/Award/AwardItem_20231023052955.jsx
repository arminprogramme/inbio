import { Component } from 'react';

class AwardItem extends Component {
    render() {
        return (
            <div className='award-item text-center'>
                <div className="img-award w-12 text-center">
                <img src="client1.webp" className='w-100 text-center' alt="" />
                </div>
            </div>
        );
    }
}

export default AwardItem;
