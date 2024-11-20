import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import "./Detail.css";
const Detail =()=>{
  const nav = useNavigate();
    return (
      <div className="Detail">
       <h1>상세보기</h1>
      
        <LabelText text={"글번호"}  value={"6"}/>
        <LabelText text={"제목"}  value={"React"}/>
        <LabelText text={"작성자"}  value={"이가현"}/>
        {/* <LabelText text={"내용"}  value={"React너무 좋아요"}/> */}

        <div className="divContent">
          <div className="divContent_label">cotent</div> 
          <textarea className="divContent_textarea" placeholder="오늘은 어땠나요?" name="content"  disabled value={"React너무 좋아요"}></textarea>
       </div>

       <div className="divBtn">
            <Button text={"수정"}  type={"button"}  onClick={()=>{nav("/updateForm/3")}}/>
            <Button text={"삭제"}  type={"button"} />
        </div>
      
      </div>
    )
  }
  
  export default Detail;