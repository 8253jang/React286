import React from 'react';
import "./TodoItem.css";

const TodoItem = ({id, isDone, content , date , onUpdate , onDelete }) => {
    console.log(id+"-> 랜더링...")
    
    const onChangeCheckbox=()=>{
       //수정하기(checkbox 상태변경)
       onUpdate(id);
    }

    //삭제 클릭했을때 
    const onClickDeleteButton = ()=>{
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} readOnly/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

export default TodoItem;










