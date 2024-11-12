import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex01_Map from './Ex01_Map.jsx'
import EX02_Map from './EX02_Map.jsx'
import Ex03_Map from './Ex03_Map.jsx'
import CommentList from './comments/CommentList.jsx'
import Ex04_MapKeyTest01 from './EX04_MapKeyTest01.jsx'
import Ex05_MapkeyTest02 from './Ex05_MapkeyTest02.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 1. Ex01_Map 기본 test */}
    {/* <Ex01_Map/> */}

    {/* 2. Ex02_Map 객체 배열 test */}
    {/* <EX02_Map/> */}

     {/* 3. Ex03_Map Product 배열 test */}
     {/* <Ex03_Map/> */}

    {/* 4. CommentList  test */}
    {/* <CommentList/> */}

     {/* 5.Ex04_MapKeyTest  */}
     <Ex04_MapKeyTest01/>
     <hr/>
     <Ex05_MapkeyTest02/>
  </StrictMode>,
)
