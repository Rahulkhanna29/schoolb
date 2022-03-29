import React from 'react';


const CustomBox=(prop)=>{
    return(
        <div className='rightView' style={prop.style}>
        <div className='top'>
            <text className='topText'>{prop.text}</text>
            <text className='topText1'>{prop.text1}</text>
        </div>
        <div className='line'></div>
        {prop.children}
        </div>
    );
}
export default CustomBox;