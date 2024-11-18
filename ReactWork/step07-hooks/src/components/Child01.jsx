import React from 'react';

import { useContext } from 'react';
import { GlobalContext } from '../Context01';
import Child02 from './Child02';

const Child01 = () => {
    const {list,setList, btnClick01} = useContext(GlobalContext);
    const addList = ()=>{
        setList([...list, {id:3, name:"나영"}]);
    }

    return (
        <div style={{border:"1px blue solid" , padding:"20px"}}>
            <h3>Child01 입니다.</h3>
            <button onClick={btnClick01}>눌려봐</button>
            <button onClick={addList}>추가</button>
            <hr/>
            <Child02/>
        </div>
    );
};

export default Child01;