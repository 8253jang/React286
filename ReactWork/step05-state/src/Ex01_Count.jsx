import {useState} from 'react';

import './EX01_Count.css';
const Ex01_Count = () => {
    console.log("call...")
    const [no, setNo] = useState(0); //0은 no초기값 /   setNo는 값변경할때 사용하는 함수
    let i=0;
    const minusFn = ()=>{
      setNo(no-1);
      i--;
    }

    const plusFn = ()=>{
        setNo(no+1);
        i++;
    }

    return (
        <div className='countStyle'>
            <button onClick={minusFn}>빼기</button>
            <span>{no}/{i}</span>
            <button onClick={plusFn}>더하기</button>
        </div>
    );
};

export default Ex01_Count;