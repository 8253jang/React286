import { useState } from 'react'
import {  Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import User from './pages/User';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';


function App() {
  const navigate = useNavigate();
    const btnClick1 = ()=>{
       //기능
       
       //컴포넌트 랜더링
       navigate("/user/"+50);

    }
    const btnClick2 = ()=>{
      //기능
      navigate("/admin");
    }
    const btnClick3 = ()=>{
       //기능
       navigate(-1); //뒤로가능
    }

    const btnClick4 = ()=>{
      //기능
      navigate("/",{replace:true}); //
   }
 

  return (
    <div>
      <Link to={"/"}>HOME</Link>&nbsp;&nbsp;&nbsp;
     <Link to={"/user"}>User</Link>&nbsp;&nbsp;&nbsp;
     <Link to={"/admin"}>Admin</Link>

     <hr/>
     <a href="/">HOME</a>&nbsp;&nbsp;&nbsp;
     <a href="/user">User</a>&nbsp;&nbsp;&nbsp;
     <a href="/admin">Admin</a>
     <hr/>
     <button onClick={btnClick1}>user로이동</button>
     <button onClick={btnClick2}>Admin로이동</button>
     <button onClick={btnClick3}>goBack</button>
     <button onClick={btnClick4}>뒤로가기 방지</button>

      <h3>어떤 컴포넌트가 랜더링되어도 전 항상나와요~</h3>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
   </div>

  )
}

export default App
