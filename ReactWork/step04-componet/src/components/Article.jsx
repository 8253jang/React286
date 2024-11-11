import React from 'react';
import Trip from './Trip';

const Article = (props) => {
    return (
        <>
        
         <p>
         <h3>{props.title}</h3>
            이번 여름에 바다가 있는 테마 여행을 시작합니다.<br/>
            {props.body}  / {props.list}
         </p>  
         <Trip title={props.title}/> 
        </>
    );
};

export default Article;