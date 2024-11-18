
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useReducer, useState } from 'react';
import { useRef } from 'react';


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


function App() {
  //const [todos , setTodos] = useState(mockData);
  const [ todos , dispatch]=useReducer(reducer, mockData)

  //id의 값은 화면을 갱신 하려는 용도가 아니고 내부적으로 값을 유지하기 용도이므로  ref사용한다.
  const idRef = useRef(3); //재 랜더링이 되어도 내부적으로 값을 유지 할 수 있도록 Ref 사용

  //추가하기
  const onCreate = (content)=>{
     dispatch({
      type:"CREATE",
      data:{
        id: idRef.current++,
        isDone:false,
        content:content,
        date: new Date().getTime(),
      }
     })
  }

  //수정하기
  const onUpdate = (targetId)=>{ //TodoItem에서 호출할때 전달한 id
    dispatch({
      type:"UPDATE",
      targetId
     })
  }

  //삭제하기 
  const onDelete = (targetId)=>{
    //인수 : todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    dispatch({
      type:"DELETE",
      targetId:targetId,
     });
  }

  return (
    <div className="App">
     <Header/>
     <Editor onCreate={onCreate}/>
     <List todos={todos}   onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
