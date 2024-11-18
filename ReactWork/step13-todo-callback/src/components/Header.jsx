import React, { memo } from 'react';
import "./Header.css";
const Header = () => {
    console.log("Header call..")
    return (
        <div className="Header">
            <h3>오늘의 Plan🌼</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

/*const memoizedHeader = memo(Header)
export default memoizedHeader;*/

export default memo(Header);
