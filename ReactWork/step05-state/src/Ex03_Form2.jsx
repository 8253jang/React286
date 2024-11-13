import React from 'react';
import { useState } from 'react';

const Ex03_Form2 = () => {
    const [profile, setProfile]= useState({
        name:"",
        age:"",
        email:"",
    })

    const inputUpdate =(e)=>{
        console.log(e.target)
      //  const name=e.target.name;
       // const value=e.target.value
       const {name, value} = e.target;
       console.log(name, value);

       setProfile({
        ...profile,
        [name] : value, // []를 사용하지 않으면 문자열 리터럴 'name'으로 취급되어 name이라는 속성이 추가된다. []사용하면 name변수의 값이 속성이름이 된다.즉 동적으로 속성이름을 결정할수 있따.
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