import React from 'react';
import main_pic from '../../images/main_bionic_pic.jpg';

export default function Main(){
    return(
        <div>
            <div className='main--container1'>
                <img className='main--pic' src={main_pic} alt="bionic_img"></img>
                <h1 className='main--h1'>Meet the Hero Arm</h1>
                <p className='main--p'>The world's first clinically approved 3D-printed bionic arm, with multi-grip functionaliy 
                and empowering aesthetics</p>
                <button className='main--brochure' type="button">Download Brochure</button>
            </div>
            <div className='main--container2'>
                <h1 className='mainc2--h1'> A prosthesis build for function & comfort</h1>
                <p className='mainc2--p'> Engineered especially for you, the Hero Arm is a lightweight affordable myoelectric 
                prosthesis for below-elbow amputee adults and children aged eight and above. Using the 
                Open Bionics Hero Arm you can grab, pinch, high-five, fist bump, thumbs-up. Welcome to the
                future, where disabilities are superpowers.</p>
                <button className='main--brochure mainc2--button' type="button">Request Information</button>
            </div>
        </div>
        
    )   
}