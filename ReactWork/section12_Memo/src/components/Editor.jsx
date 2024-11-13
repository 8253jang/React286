import { useRef, useState } from "react";
import "./Editor.css"
import { useContext } from "react";
import {  TodoDispatchContext } from '../App';
const Editor = ()=>{
    //const data = useContext(TodoContext);
    //console.log(data);

    const {onCreate} = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const contentRef = useRef();
    const onChangeContent = (e)=>{
        setContent(e.target.value)
    }

    const onSubmit = ()=>{
        if(content ===""){
            contentRef.current.focus();
            return;
        }
       onCreate(content);
       setContent("");
    };

    //엔터입력했을때 onsubmit 호출
    const onkeydown = (e)=>{
       if(e.keyCode===13){
         onSubmit();
       }
    }

    return (
        <div className="Editor">
            <input ref={contentRef} placeholder="새로운 todo" 
            onChange={onChangeContent} 
            value={content}
            onKeyDown={onkeydown} />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;