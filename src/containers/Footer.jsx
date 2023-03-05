import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import '../index.css';

const Footer = () => {
    return (
        <div className='footer_position'>
            <div className='static_container'>
                <div className='left_control'>
                    <BsGithub className='icon_control' />
                </div>
                <div className='right_control'>
                    <BsLinkedin className='icon_control' />
                </div>
            </div>
        </div>
    )
}

export default Footer;