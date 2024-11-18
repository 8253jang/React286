import React, { memo } from 'react';
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

//export default TodoItem;

export default memo(TodoItem);

// export default memo(TodoItem, (prevProps , nextProps)=>{
//     //리턴값에 Props가 바뀌었는지 안 바뀌었는지 판단한다.
//     // true -> Props 바뀌지 않음 (리랜더링 안됨)
//     // false -> Props 바뀜 (리랜더링 됨)

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true; //리랜더링 안됨
// });









