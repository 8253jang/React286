import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Memo01 = () => {
    const [list ,setList] = useState([1,2,3,4]);
    const [str ,setStr] = useState("합계결과");
    //list 항목 더하기 기능

    const getAddResult = ()=>{
        let sum=0;
        list.forEach((i)=>{
            sum= sum+i;
        });
        console.log("sum = " , sum);

        return sum;
    }//getAddResult함수끝
    
 
     //기 함수를 useMemo를 사용한다. - 메모이제이션 -값이 변경되지 않으면 계산된 값을 캐시하여 성능을 최적화합니다.
     const addResult = useMemo(()=> {return getAddResult()}  ,[list] );


    return (
        <div>
          <h3> useMemo 사용하기 </h3>  
          {
            list.map((item, index)=><h6 key={index}>{item}</h6>)
          }
          {/* <h3>{str} : {getAddResult()} </h3> */}
          <h3>{str} : {addResult} </h3>
          <button onClick={()=>{ setList([...list , 10]) }}>리스트추가</button>
          <button onClick={()=>{ setStr("리스트합계") }}>문자변경</button>
        </div>
    );
};

export default Memo01;