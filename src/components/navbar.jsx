import React from 'react';
import logo from '../images/cryptocurrency.png'
export default function Navbar(){
    return(
        <div className='navbar--container'>
            <div className='navbar--logo'>
                <img src={logo}></img>
                <h2>Bionica</h2>
            </div>
            <ul className='navbar--links'>
            <li><a href="#">Bionic Squad</a></li>
            <li><a href="#">Hero Arm</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">Get Hero Arm</a></li>
            </ul>
        </div>
    )
}