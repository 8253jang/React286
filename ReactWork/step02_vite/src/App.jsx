
import './App.css'

function App() {
   const message ="JSX문법 공부하기";

   const student={
     name:"장희정",
     age:15,
     addr:"경기도 성남시",
     phone:"010-8875-8253"
   }

   //css  속성 - camelcase 문법
   const cssStyle={
    color:"red" ,
    backgroundColor:"yellow"
  }

  const sayHello = ()=>{
    console.log("버튼 클릭")
  }
  
  return (
    <>
      <h1 style={cssStyle}>message:{message}</h1> 
      <h3>
        name:{student.name}<br/>
        age:{student.age}<br/>
        addr:{student.addr}<br/>
        phone{student.phone}<br/>
      </h3>
      <button onClick={sayHello}>클릭</button>

      {/* 조건식 만들어 보기*/}
      {student.age > 18 ? <div>성인입니다.</div> : <div>미성년자 입니다.</div>}
          
      <hr/>
        {student.age > 18 && <div style={{color:"red"}}>환영합니다.</div>}
    </>
  )
}

export default App
