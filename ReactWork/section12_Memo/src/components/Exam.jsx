import { useReducer } from "react";

//reducer : 변환기
//상태를 실제로 변화시키는 변환기역할
function reducer(state, action){//현재 상태값, 액션
   console.log(state, action);

   switch(action.type){
     case "INCRESE" : return state+action.data;
     case "DECRESE" : return state-action.data;
     default:return state;
   }
 

}

const Exam =()=>{
    //dispatch는 발송하다, 급송하다 
    //dispatch는 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수.
   const [state, dispatch] = useReducer(reducer, 0);

   const onclickPlus = ()=>{
    //인수 : 상태가 어떻게 변화되길 원하는지..
    //-> 액션객체
    dispatch({
        type:"INCRESE",
        data:1,
     } );
   };

   const onclickMinus = ()=>{
    //인수 : 상태가 어떻게 변화되길 원하는지..
    //-> 액션객체
    dispatch({
        type:"DECRESE",
        data:1,
     } );
   };

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={onclickPlus}>+</button>
            <button onClick={onclickMinus}>-</button>
        </div>
    )

}

export default Exam;