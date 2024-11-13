import { memo } from "react";
import "./Header.css"
/*
  rerender  방지를 위한 React.memo이용해보자
*/
const Header = ()=>{
    console.log("Header...")
    return (
        <div className="Header">
            <h3>  오늘은 ❤😃</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

 //export default Header;
 
//const memoizedHeader = memo(Header);
//export default memoizedHeader;

//변수에 담지않고 한번에...
export default memo(Header);