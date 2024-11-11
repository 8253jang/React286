import React from 'react';

const Ex03_Book = (props) => {
    return (
        <div>
             <h1>이 책은 {props.name} 책입니다.</h1>
             <h2>이 책의  총 페이지 수는 {props.numPage} 페지이로 이뤄져 있습니다.</h2>
        </div>
    );
};

export default Ex03_Book;