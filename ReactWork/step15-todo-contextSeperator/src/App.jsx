
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useMemo, useReducer, useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

import { createContext } from 'react';

//랜더링이 될때 다시 실행되지 않아도 되기에 함수 밖에 선언한다.
const mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:false, content:"친구만나기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
];



const reducer =(state, action)=>{
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map((todo)=>todo.id===action.targetId ? {...todo , isDone : !todo.isDone} : todo);
    case "DELETE" : return state.filter((todo)=>todo.id!==action.targetId);
    default : return state;
  }
}

// context 사용하기
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  console.log("App 함수....")
  //const [todos , setTodos] = useState(mockData);
  const [ todos , dispatch]=useReducer(reducer, mockData)
  
  //id의 값은 화면을 갱신 하려는 용도가 아니고 내부적으로 값을 유지하기 용도이므로  ref사용한다.
  const idRef = useRef(3); //재 랜더링이 되어도 내부적으로 값을 유지 할 수 있도록 Ref 사용

  
  //onCreate, onUpdate, onDelete 함수를 useCallback을 이용해서 만들어보자
  //함수를 자식 컴포넌트에 props로 전달할때마다 자식이 리랜더링 되는것을 막 을수 있다.
  const onCreate = useCallback((content)=>{
    console.log("onCreate content = " + content)
      dispatch({
        type:"CREATE",
        data:{
          id: idRef.current++,
          isDone:false,
          content:content,
          date: new Date().getTime(),
        }
      });
    } , []);

  const onUpdate = useCallback((targetId)=>{
    console.log("onUpdate targetId = " + targetId)
    dispatch({
      type:"UPDATE",
      targetId
     })
    
  } , []);


  const onDelete = useCallback((targetId)=>{
    console.log("onDelete targetId = " + targetId)
    dispatch({
      type:"DELETE",
      targetId:targetId,
     });
  } , []);


   const memoizedDispatch = useMemo(()=>{ return {onCreate, onUpdate, onDelete} } , []);

  return (
    <div className="App">  
     <Header/>
     <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch}>
        <Editor />
        <List />
      </TodoDispatchContext.Provider>
     </TodoStateContext.Provider>
    </div>
  )
}

export default App
