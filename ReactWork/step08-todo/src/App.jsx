
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState } from 'react';
import { useRef } from 'react';

//랜더링이 될때 다시 실행되지 않아도 되기에 함수 밖에 선언한다.
const mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:false, content:"친구만나기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
];

function App() {
  const [todos , setTodos] = useState(mockData);
  const idRef = useRef(3); //재 랜더링이 되어도 내부적으로 값을 유지 할 수 있도록 Ref 사용
  //추가하기
  const onCreate = (content)=>{
    const newTodo={
      id:idRef.current++ , isDone:false, content:content, date: new Date().getTime()
    }

    setTodos([newTodo , ...todos ])
  }

  //수정하기
  const onUpdate = ()=>{
    
  }

  //삭제하기 
  const onDelete = ()=>{
    
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
