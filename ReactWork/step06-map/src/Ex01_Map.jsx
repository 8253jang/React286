import React from 'react';

const Ex01_Map = () => {
    const items = ['Apple', 'Banana', 'Orange'];
    return (
        <div>
            <ul>
                {
                    items.map((item,index)=>
                      <li key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Ex01_Map;