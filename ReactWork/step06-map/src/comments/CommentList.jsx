import React from 'react';
import Comment from './Comment';


const CommentList = () => {
    const comments = [
        {
            name: "장희정",
            comment: "안녕하세요, Best Programer입니다.",
        },
        {
            name: "이가현",
            comment: "리액트 재미있어요~!",
        },
        {
            name: "이찬범",
            comment: "저도 리액트 배워보고 싶어요!!",
        },
        {
            name: "이찬범2",
            comment: "저도 리액트 배워보고 싶어요!!2",
        },
    ];

    
    return (
        <div>
         {
            comments.map((com, index)=>{
                return <Comment name={com.name}  text={com.comment} key={com.name}/>
            })
         }
        </div>
    );
};

export default CommentList;