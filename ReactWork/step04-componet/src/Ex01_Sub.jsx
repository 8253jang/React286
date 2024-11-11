import React from 'react';

let num=100;
let name="heejung";

const Ex01_Sub = () => {
    return (
        <div>
            Sub입니다.<br/>
             num:{num} / name : {name}
        </div>
    );
};

export default Ex01_Sub;
export {num, name};