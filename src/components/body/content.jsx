import React from 'react';
import test_pic from '../../images/testimony.webp';

export default function Content(){
    return(
        <div className='content--container'>
            <p className='content--p'>"It's all thanks to the Hero Arms I am able to teach again! From writing on the 
            school board, to carrying books, children are obsessed with the Hero Arms and always a
            sk me to show how they work. - Bionic Teacher - Kath Tregenna"</p>
            <sec >
                <img className='content--img' src={test_pic} alt="bionic_img"></img>
            </sec>
            <sec className='content--tes2'>
                <h2>Your limb difference is your superpower</h2>
                <p>We're now offering Star Wars BB-8, Marvel Iron Man and Disney Frozen bionic arm covers for free to limb-different 
                children with every Hero Arm. In Mark Hamill's words: your limb difference is your very own superpower.
                </p>
            </sec>
        </div>


    )
}