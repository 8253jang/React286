import React from 'react';
import { useState } from 'react';

import { createContext } from 'react';
import Child01 from './components/Child01';

export const GlobalContext = createContext();

const Context01 = () => {
    const [list, setList] = useState([{id:1, name:"희정"},{id:2, name:"가현"}]);

    const btnClick01 = ()=>{
          console.log("btnClick01 호출됨...")
    }
    const btnClick02 = ()=>{
        console.log("btnClick02 호출됨...")
   }
    return (
        <GlobalContext.Provider value={{list , setList , btnClick01 , btnClick02}}>
            <div style={{border:"1px red solid" , padding:"10px"}}>
                <h3 onClick={btnClick01}>user정보</h3> 
                {list.map((user, index)=><div key={index}>{user.id} | {user.name}</div>)}
                <hr/>
                <Child01/>
            </div>
        </GlobalContext.Provider>
    );
};

export default Context01;