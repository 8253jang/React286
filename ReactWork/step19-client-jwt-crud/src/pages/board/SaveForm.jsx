import Button from "../../components/Button";
import LabelText from "../../components/LabelText";
import "./SaveForm.css";
const SaveForm =()=>{
    return (
      <>
      <h1 className="h1">  게시물 등록하기 </h1>
     
        <LabelText text={"title"} name={"title"}/>
        <LabelText text={"writer"} name={"writer"}/>
     
        <div className="divContent">
          <div className="divContent_label">cotent</div> 
          <textarea className="divContent_textarea" placeholder="오늘은 어땠나요?" name="content" ></textarea>
       </div>

        <div className="divBtn">
            <Button text={"등록"}  type={"button"} />
            <Button text={"취소"}  type={"reset"} />
        </div>
      </>
    )
  }
  
  export default SaveForm;