import React from 'react';
import TodoItem from './TodoItem';
import "./List.css"
import { useState } from 'react';
const List = ({todos}) => {
    const [search, setSearch] = useState("");
    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input placeholder='검색어를 입력해주세요.' value={search} 
            onChange={(e)=>setSearch(e.target.value)} />
            
            <div className="todos_wrapper">
                {
                    todos.map((todo)=>{
                      return <TodoItem key={todo.id} {...todo} />
                    })
                }
            </div>
        
        </div>
    );
};

export default List;