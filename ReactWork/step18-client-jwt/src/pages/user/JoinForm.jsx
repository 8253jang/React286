import Button from "../../components/Button";

import LabelText from "../../components/LabelText";
import "./JoinForm.css";
const JoinForm =()=>{
    return (
      <>
      <h1 className="h1">회원가입</h1>
     
        <div className="idDuplicate">
         <LabelText text={"아이디"} name={"id"}/>
         <div className="idText">아이디중복여부</div>
        </div>
        <LabelText text={"이름"} name={"name"}/>
        <LabelText text={"비밀번호"} name={"pwd"}/>
        <LabelText text={"주소"} name={"address"}/>
        <div className="divBtn">
            <Button text={"회원가입"}  type={"button"} />
            <Button text={"취소"}  type={"reset"} />
        </div>
       
       
      </>
    )
  }
  
  export default JoinForm;