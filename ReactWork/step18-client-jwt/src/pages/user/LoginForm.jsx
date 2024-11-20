import Button from "../../components/Button";
import LabelText from "../../components/LabelText";

import "./LoginForm.css";
const LoginForm =()=>{
    return (
      <div className="LoginForm">
        <h1 className="h1">로그인</h1>
        <LabelText text={"아이디"} name={"id"}/>
        <LabelText text={"비밀번호"} name={"pwd"}/>

        <div className="divBtn">
            <Button text={"로그인"}  type={"button"} />
            <Button text={"취소"}  type={"reset"} />
        </div>
        
      </div>
    )
  }
  
  export default LoginForm;