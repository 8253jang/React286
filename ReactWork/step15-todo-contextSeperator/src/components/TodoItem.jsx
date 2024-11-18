import React, { memo } from 'react';
import "./TodoItem.css";
import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content , date }) => {
    
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    
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
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

//export default TodoItem;

export default memo(TodoItem);











