import React from 'react';
import TodoItem from './TodoItem';
import "./List.css"
import { useState } from 'react';
const List = ({todos , onUpdate , onDelete }) => {
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

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input placeholder='검색어를 입력해주세요.' value={search}  onChange={(e)=>setSearch(e.target.value)} />
            
            <div className="todos_wrapper">
                {
                    //todos.map((todo)=>{
                    filteredTods.map((todo)=>{
                      return <TodoItem key={todo.id} {...todo}  onUpdate={onUpdate} onDelete={onDelete}/>
                    })
                }
            </div>
        
        </div>
    );
};

export default List;