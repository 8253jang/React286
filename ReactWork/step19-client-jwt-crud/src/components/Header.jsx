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
            
            
            {logingedCon.isLoggedIn ? (
               <div className="logout">
                <span>{localStorage.getItem("name")}님</span>
                <Button text={"로그아웃"} type={"button"} onClick={logoutCheck} />
              </div>
            ) 
          : 
            <Link to="/loginForm">로그인</Link>
           
          }

            
        </div>    
      </>
    )
  }
  
  export default Header;