import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex01_Count from './Ex01_Count.jsx'
import EX02_Form1 from './EX02_Form1.jsx'
import Ex03_Form2 from './Ex03_Form2.jsx'
import Ex04_ConditionRendering from './Ex04_ConditionRendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 1. state 연습 count up down */}
    {/* <Ex01_Count/> */}

    {/* 2.EX02_Form1.jsx - 입력값 state */}
    {/* <EX02_Form1 /> */}

    {/* 3.EX02_Form2.jsx - 입력값 state Profile */}
     {/* <Ex03_Form2/> */}

     {/* 4.EX04_ConditionRendering 실습 */}
     <Ex04_ConditionRendering/>
    
  </StrictMode>,
)
