import React from 'react';
import { BsCart3, BsFillInfoCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    selectCart
} from '../features/cartSlice';

import '../index.css';

const Header = () => {
    const cartItems = useSelector(selectCart);

    return (
        <div className='static_container'>
            <div className='left_control'>
                <BsFillInfoCircleFill className='icon_control' />
            </div>
            <div>
                <Link to='/'><h1>EKart</h1></Link>
            </div>
            <div className='cart_inf'>
                <div className='right_control'>
                    <Link to='/cart'><BsCart3 className='icon_control' /></Link>
                </div>
                <div id='items_quantity'>{cartItems}</div>
            </div>
        </div>
    )
}

export default Header;