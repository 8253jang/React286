import React from 'react';
import imgName from "../assets/Hawaii.jpg";
const Trip = (props) => {
    return (
        <div>
            <img src={imgName} alt='하와이이미지입니다.' className='imgStyle' />
        </div>
    );
};

export default Trip;