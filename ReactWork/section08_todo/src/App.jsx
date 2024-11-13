
import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

//랜더링이 될때 다시 실행되지 않아도 되기에 함수 밖에 선언한다.
const mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:false, content:"친구만나기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
];

function App() {
  const [todos , setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content)=>{
    const newTodo={
      id:idRef.current++ , isDone:false, content:content, date: new Date().getTime()
    }

    //todos.push(newTodo);//이렇게 하면 안된다. 반드시 setState에 의해 변경을 감지해야 화면이 갱신된다.
    setTodos([newTodo , ...todos ])
  }

  //수정하기
  const onUpdate = (targetId)=>{
    //todos state의 값들중에 targetId와 일치하는 todoitem의 isDone 변경
    
    //인수:todos배열에서 targetId와 일치하는 id를 갖는요소의 데이터만 딱 새로운 배열
   /* setTodos(todos.map((todo)=>{
        if(todo.id === targetId){
          return {
            ...todo,
            isDone : !todo.isDone
          }
        }
        return todo;
    }));*/
    //위문장 3항영산자로..
    setTodos(todos.map((todo)=>todo.id===targetId ? {...todo, isDone:!todo.isDone} : todo));

  };

  //삭제하기
  const onDelete = (targetId)=>{
    //인수 : todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
     setTodos(todos.filter((todo)=>todo.id!== targetId));
  }

  return (
    <div className="App">
    <Header/>
    <Editor onCreate={onCreate} />
    <List  todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
