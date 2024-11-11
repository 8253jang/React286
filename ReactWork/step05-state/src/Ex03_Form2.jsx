import React from 'react';
import { useState } from 'react';

const Ex03_Form2 = () => {
    const [profile, setProfile]= useState({
        name:"",
        age:"",
        email:"",
    })

    const inputUpdate =(e)=>{
       const {name, value} = e.target;
       console.log(name, value);

       setProfile({
        ...profile,
        [name] : value,
       })
    }
    return (
        <div>
           <h2>폼 입력값 state Test - Profile</h2>
            이름: <input type="text" name="name" value={profile.name} onChange={inputUpdate} />
            <br></br>
            나이: <input type="text" name="age" value={profile.age} onChange={inputUpdate} />
            <br></br>
            이메일: <input type="text" name="email" value={profile.email} onChange={inputUpdate} /> 
        </div>
    );
};

export default Ex03_Form2;