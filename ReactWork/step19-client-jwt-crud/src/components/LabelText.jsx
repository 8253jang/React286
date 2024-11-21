import { useState } from "react";
import "./LabelText.css"

const LabelText =({text, name, value:initialValue , changeValue})=>{
    const [value, setValue] = useState(initialValue || "");

   const onChangeCheck = (e)=>{
     changeValue(e);
   }

    return (
        <div className="LabelText" >
            <label className="label">{text}</label>
            <input className={`${value=="" ? 'input' : 'input_disabled' }`} 
            type={`${name==="pwd" ? "password" : "text"}`}  name={name}  
            onChange={onChangeCheck}/>
        </div>
    )
}
 
  export default LabelText;