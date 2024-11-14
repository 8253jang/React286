import React, { useEffect, useRef, useState } from 'react';

const Ref04 = () => {
    const [count ,setCount] = useState(0);
    const countRef = useRef(0);

    //컴포넌트가 총 몇번 랜더링 되었는제 회수를 계산
    useEffect(()=>{
         console.log("랜더링....")
         //setCount(count+1)//무한루프(state가변경되면 컴포넌트함수가 다시 호출된다. -> useEffect실행->호출...)
         countRef.current = countRef.current+1;//리랜더링 안된다!!
         console.log("countRef.current = " + countRef.current);
    });
    return (
        <div>
           <p>Count = {count}  / countRef.current = {countRef.current} <br/>
            <button onClick={()=>{setCount(count+1)}}>Up</button></p> 
        </div>
    );
};

export default Ref04;