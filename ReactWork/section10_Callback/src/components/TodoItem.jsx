import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({id, isDone, content , date, onUpdate , onDelete})=>{
    //console.log("TodoItem cal...")
    const onChangeCheckbox = ()=>{
        onUpdate(id);
    }
    const onClickDeleteButton = ()=>{
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            {/* <input type="checkbox" checked={isDone}  readOnly /> */}
            <input type="checkbox" checked={isDone}  onChange={onChangeCheckbox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

//export default TodoItem;

export default memo(TodoItem);
//고차 컴포넌트(Higher Order Component = HOC)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//      //반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//      //T - Props가 바뀌지 않음 - 리렌더링 안한다.
//      //F - Props 바뀜 - 리렌더링 한다.
//      if(prevProps.id !== nextProps.id) return  false;
//      if(prevProps.isDone !== nextProps.isDone) return  false;
//      if(prevProps.content !== nextProps.content) return  false;
//      if(prevProps.date !== nextProps.date) return  false;

//      return true;
// });