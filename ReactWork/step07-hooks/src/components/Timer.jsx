import React from 'react';
import { useEffect } from 'react';

const Timer = () => {
    //랜더링이 될때 해야할 일 useEffect함수작업
    useEffect(()=>{
        console.log("Timerrs useEffect 실행..");

        const timer = setInterval(()=>{
            console.log("타이머 실행중...");
        } , 1000);

        //정리작업
        return ()=>{
            console.log("정리중입니다...");
            clearInterval(timer);
            console.log("종료합니다.")
        }
    } ,[]);//최초에 마운틴 될때만...

    return (
        <div>
           <span> 타이머를 시작합니다. Console 확인하기!</span> 
        </div>
    );
};

export default Timer;