import React, { useRef, useState } from 'react';

const Ref03 = () => {
    console.log("리 랜더링중....")
    const countRef = useRef(0);
    let countLet = 0;

    //화면갱신(리랜더링)을 위한 변수
    const [render, setRender] = useState(0);
   
    const refUp=()=>{
        countRef.current = countRef.current +1;
        console.log("countRef.current = " , countRef.current)
    }

    const letUp=()=>{
        countLet = countLet +1;
        console.log("countLet = " , countLet)
    }  

    return (
        <div>
          <p>Ref :{countRef.current} <button onClick={refUp}>Ref up</button></p>  
          <p>let :{countLet} <button onClick={letUp}>let up</button></p>  
          
        <button onClick={()=>{setRender(render+1)}}>reRendering</button>
        </div>
    );
};

export default Ref03;