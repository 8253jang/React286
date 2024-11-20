import Button from "../../components/Button";
import LabelText from "../../components/LabelText";

const UpdateForm =()=>{
    return (
      <>
       <h1 className="h1">  수정하기 </h1>
      <form>
       
        <LabelText text={"title"} name={"title"}/>
       
        <LabelText text={"writer"} name={"writer"}/>
        {/* <LabelText text={"content"} name={"content"}/> */}

        <div className="divContent">
          <div className="divContent_label">cotent</div> 
          <textarea className="divContent_textarea" placeholder="오늘은 어땠나요?" name="content" ></textarea>
       </div>
        <div className="divBtn">
            <Button text={"수정"}  type={"button"} />
            <Button text={"취소"}  type={"reset"} />
        </div>
        </form>
      </>
    )
  }
  
  export default UpdateForm;