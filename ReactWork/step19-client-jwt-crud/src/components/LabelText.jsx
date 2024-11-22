import { useEffect, useState } from "react";
import "./LabelText.css"

const LabelText =({text, name, initValue , changeValue , readOnly})=>{
    //console.log("initValue = " + initValue)
    const [value, setValue] = useState(initValue || "");
    //console.log("value = " + value)

   
     useEffect(()=>{
      readOnly && setValue(localStorage.getItem("name"));
     });

   const onChangeCheck = (e)=>{
     setValue(e.target.value)
     changeValue(e);
   }

    return (
        <div className="LabelText" >
            <label className="label">{text}</label>
            { initValue ? 
            <div>{initValue}</div> :
            <input 
            className={`${initValue ?  'input_disabled':'input'  }`} 
            type={`${(name==="password" || name==="pwd") ? "password" : "text"}`} 
             name={name}  
            value={value}
            readOnly={readOnly ? true : undefined} 
            onChange={onChangeCheck} />
         }
        </div>
    )
}
 
  export default LabelText;