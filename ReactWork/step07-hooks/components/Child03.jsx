import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../src/Context01';

const Child03 = () => {
    const {btnClick02} = useContext(GlobalContext);
    return (
        <div style={{border:"1px orange solid" , padding:"10px"}}>
          <h3>Child03입니다.</h3>
          <button onClick={btnClick02}>클릭</button>
        </div>
    );
};

export default Child03;