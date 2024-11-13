import React from 'react';
import { useState } from 'react';

const EX02_Form1 = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);

    const inputName =(e)=>{
        console.log(e.target.value)
        setName(e.target.value);
    }
    return (
        <div>
           <h2>폼 입력값 state Test</h2> 
           이름 :<input type="text" value={name} onChange={inputName}/><br/>
           나이 :<input type="text" value={age !== 0 ? age : ''}  onChange={(e)=>setAge(e.target.value)}/><br/>
        </div>
    );
};

export default EX02_Form1;