import React, { useMemo } from 'react';
import TodoItem from './TodoItem';
import "./List.css"
import { useState } from 'react';
import { useContext } from 'react';
import {  TodoStateContext } from '../App';

const List = () => {

    const todos = useContext(TodoStateContext);

    const [search, setSearch] = useState("");

    //검색어를 입력했을때 검색어를 포함한 todo정보 조회
    const getFilterData =()=>{
       if(search==="")return todos;

      const searchedTodos =  todos.filter((todo)=>{
          return todo.content.toLowerCase().includes(search.toLowerCase());
       });

       return searchedTodos;
    }

    //컴포넌트가 리랜더링 될때마다.. 호출되도록...
   const filteredTods = getFilterData();

   ////////useMemo 사용전 ///////////////////////////////
   /* const getAnalyzedData =()=>{
        console.log("getAnalyzedData call");

        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

       // return {totalCount:totalCount,doneCount:doneCount, notDoneCount:notDoneCount}
       return {totalCount,doneCount, notDoneCount}
    }

   const {totalCount, doneCount ,notDoneCount } = getAnalyzedData();*/

   /////위 코드 useMemo사용 //////////////////////////////////////
   

const {totalCount, doneCount ,notDoneCount } = useMemo(()=>{
        console.log("getAnalyzedData call");
    
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
    
       return {totalCount,doneCount, notDoneCount}
  
} , [todos]);


    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>doneCount : {doneCount}</div>
                <div>notDoneCount : {notDoneCount}</div>
            </div>

            <input placeholder='검색어를 입력해주세요.' value={search}  onChange={(e)=>setSearch(e.target.value)} />
            
            <div className="todos_wrapper">
                {
                    //todos.map((todo)=>{
                    filteredTods.map((todo)=>{
                      return <TodoItem key={todo.id} {...todo}  />
                    })
                }
            </div>
        
        </div>
    );
};

export default List;