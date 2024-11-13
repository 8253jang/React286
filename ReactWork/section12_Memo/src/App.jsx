
import { useReducer, useRef, useState , useCallback, useMemo} from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import { createContext } from 'react'


//랜더링이 될때 다시 실행되지 않아도 되기에 함수 밖에 선언한다.
const mockData = [
  {id:0, isDone:false, content:"React study", date: new Date().getTime()},
  {id:1, isDone:false, content:"노래하기", date: new Date().getTime()},
  {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()},
];


function reducer(state, action){
   switch(action.type){
        case "CREATE" : 
           return [ action.data , ...state];
        case "UPDATE" : 
           return state.map((todo)=>todo.id===action.targetId ? {...todo, isDone:!todo.isDone} : todo);
        case "DELETE" : 
           return state.filter((todo)=>todo.id!== action.targetId);        
    }
}

//Context를 2개로  분리하자.
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

//console.log(TodoContext);//정보를 확인해보자.굉장히 많이 있지만 Provider : 공급자


function App() {
  //const [todos , setTodos] = useState(mockData);
  
  //useState대신에 Reducer 이용하기 
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);
  // const onCreate = (content)=>{
  //   dispatch({
  //     type:"CREATE",
  //     data:{
  //       id:idRef.current++ , isDone:false, content:content, date: new Date().getTime()
  //     }
  //   });
  // }

  //수정하기
  // const onUpdate = (targetId)=>{
  //  dispatch({
  //     type:"UPDATE",
  //     targetId,
     
  //   });

  // };

  //삭제하기
  // const onDelete = (targetId)=>{
  
  //    dispatch({
  //     type:"DELETE",
  //    targetId:targetId
  //   });
  // }

 //const func = useCallback(()=>{  },[]);

 const onCreate =useCallback((content)=>{
  dispatch({
    type:"CREATE",
    data:{
      id:idRef.current++ , isDone:false, content:content, date: new Date().getTime()
    }
  })},[]);


 const onUpdate = useCallback((targetId)=>{
  dispatch({
     type:"UPDATE",
     targetId,
    
   }); 

 },[]);

 const onDelete = useCallback((targetId)=>{
        dispatch({
        type:"DELETE",
        targetId:targetId
      })}  ,[] );

     const memoizedDispatch = useMemo(()=>{return {onCreate , onUpdate, onDelete} }, []);
  return (
    <div className="App">
    <Header/>
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch} >
        <Editor  />
        <List />
        </TodoDispatchContext.Provider> 
    </TodoStateContext.Provider>
    

    {/* <Exam/> */}
    </div>
  )
}

export default App
