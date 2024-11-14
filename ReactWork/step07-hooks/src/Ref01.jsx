import React, { useEffect, useRef, useState } from 'react';

const Ref01 = () => {
 const inputRef = useRef();
 const [no, setNo] =useState(0);

 //inputRef.current.focus(); //에러발생(element를 랜더링하기 전이기때문에 실제 dom접근안됨)

   //컴포넌트가 랜더링 되면 커서놓기
   useEffect(()=>{
      console.log("useEffect 랜더링...");
      console.log(inputRef);
      inputRef.current.focus();

   },[]); //최초의 마운트 될때만

   const login = ()=>{
    //no증가
    setNo(no+1);
    //text의 value 조회
   alert(`${inputRef.current.value}님로그인입니다.`);
   inputRef.current.value="";
   inputRef.current.focus();
}

    return (
        <div>  
            no : {no}<br/>
           <input type='text' ref={inputRef}/>
           <button onClick={login}>로그인하기</button> 
        </div>
    );
};

export default Ref01;