import React from 'react';
import { BsCart3, BsFillInfoCircleFill } from 'react-icons/bs';

import '../index.css';

const Header = () => {
    return (
        <div className='static_container'>
            <div className='left_control'>
                <BsFillInfoCircleFill className='icon_control' />
            </div>
            <div>
                <h1>EKart</h1>
            </div>
            <div className='right_control'>
                <BsCart3 className='icon_control' />
            </div>
        </div>
    )
}

export default Header;