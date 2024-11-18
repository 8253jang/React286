import React from 'react';
import "./Editor.css";
import { useState } from 'react';
import { useRef } from 'react';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef(); //input Dom요소에 접근 하기 위한 Ref

    //추가버튼 클릭
    const onSubmit = ()=>{
        if(content ===""){
            contentRef.current.focus();
            return;
        }

        //추가 기능 함수 호출(App.jsx파일에 있는 함수 호출된다.)
        onCreate(content);
        setContent("");
    }

    //엔터입력했을때 onsubmit 호출
    const onkeydown = (e)=>{
        if(e.keyCode===13){
          onSubmit();
        }
     }

    return (
        <div className="Editor">
            <input type="text" placeholder='새로운 todo' value={content} 
            onChange={(e)=>setContent(e.target.value)}  ref={contentRef} 
            onKeyDown={onkeydown}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;