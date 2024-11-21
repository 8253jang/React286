import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { LogingedContext } from '../App';
import Button from './Button';

const Header =()=>{
  let logingedCon = useContext(LogingedContext);
  
  const navigator = useNavigate();
  const logoutCheck = ()=>{
    localStorage.removeItem("memberNo");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("address");
    localStorage.removeItem("Authorization");

    logingedCon.onLoggedChange(false);

    navigator("/");
  }
    return (
      <>
        <div className="Header">
            <Link to="/" >HOME</Link>
            { logingedCon.isLoggedIn && <Link to="/saveForm">글쓰기</Link>}

            {!logingedCon.isLoggedIn && <Link to="/joinForm">회원가입</Link>}
            
            {/* 
            ogingedCon.isLoggedIn ? (
            <>
              <span>{localStorage.getItem("name")}</span>
              <Button text={"로그아웃"} type={"button"} onClick={logoutCheck} />
            </>
          ) : (
            <Link to="/loginForm">로그인</Link>
  )
            */}
            {logingedCon.isLoggedIn ? 
              `${}님` 
              <Button text={"로그아웃"}  type={"button"} onClick={logoutCheck}/>
              // <Link onClick={logoutCheck}>로그아웃</Link>
               :
              <Link to="/loginForm">로그인</Link>
            }
        </div>    
      </>
    )
  }
  
  export default Header;