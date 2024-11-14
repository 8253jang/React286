import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Effect01 = () => {
    const [num , setNum] = useState(0);
    const [search, setSearch] = useState(0);
    useEffect(()=>{
        console.log("Effect01 . - 랜더링 될때마다");
       
    });

    useEffect(()=>{
        console.log("Effect01 []- 최초의 Mount될때만...")
        download();
    },[]);

    useEffect(()=>{
        console.log("Effect01 [search]- 최초의 Mount될때만...")
        download();
    },[search]);


    const download = ()=>{
        //초기데이터를 조회했다 치고....그결과를 num에 초기화 해준다.??
        setNum(5);
    }

    return (
        <div>
            <h3>useEffect 함수 Test</h3>
            <h4>num :{num}</h4>
            <button onClick={()=>{setNum(num+1)}}> 1씩증가 </button>
            <hr/>
            <h4>search : {search} </h4>
            <button onClick={()=>{setSearch(2)}}> 검색 </button>
        </div>
    );
};

export default Effect01;