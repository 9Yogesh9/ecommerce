import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import '../index.css';

const Footer = () => {
    return (
        <div className='footer_position'>
            <div className='static_container'>
                <div className='left_control'>
                    <a href="https://github.com/9Yogesh9/ecommerce" target="_blank" rel="noopener noreferrer"><BsGithub className='icon_control' /></a>
                </div>
                <div style={{ fontFamily: "'Tilt Warp', cursive", textShadow: "0 0 10px black" }}>Developed with &#10084;&#65039; by Yogesh !</div>
                <div className='right_control'>
                    <a href="https://www.linkedin.com/in/yogesh-bhat/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='icon_control' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;