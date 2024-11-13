import { useState ,useMemo} from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({todos, onUpdate , onDelete})=>{
   const [search, setSearch] = useState("");
   const onChangeSearch = (e)=>{
     setSearch(e.target.value);
   }; 
   
   const getFilterdData = ()=>{
     if(search===""){
        return todos;
     }

     return todos.filter((todo)=>{
        return todo.content.toLowerCase().includes(search.toLowerCase());
     });
   }

   //컴포넌트가 리랜더링 될때마다.. 호출되도록...
   const filteredTods = getFilterdData();

   /*
     useMemo를 이용하기 위한 분석 
   */
  /* const getAnalyzedData = ()=>{
    console.log("getAnalyzedData cal....")//
      const totalCount = todos.length;

      const doneCount = todos.filter((todo)=>{return todo.isDone}).length;

      const notDoneCount = totalCount -doneCount;
      return {
         totalCount,
         doneCount,
         notDoneCount
      }
   }*/
  
   const {totalCount,doneCount,notDoneCount} =  useMemo(()=>{
    console.log("useMemo cal....")//
      const totalCount = todos.length;

      const doneCount = todos.filter((todo)=>{return todo.isDone}).length;

      const notDoneCount = totalCount -doneCount;
      return {
         totalCount,
         doneCount,
         notDoneCount
      }
   } , [todos]);  //의존성배열 : deps
 
   //const {totalCount,doneCount,notDoneCount} = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List🌱</h4>
            
            <div>total : {totalCount}</div>
            <div>doneCount : {doneCount}</div>
            <div>notDoneCount : {notDoneCount}</div>

            <input placeholder="검색어을 입력해주세요" value={search} 
             onChange={onChangeSearch} />

            <div className="todos_wrapper">
                {
                //todos.map((todo)=>{
                filteredTods.map((todo)=>{
                    return <TodoItem {...todo}  key={todo.id} onUpdate={onUpdate} onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}

export default List;