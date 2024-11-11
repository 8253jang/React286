import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex01_Exprot from './Ex01_Exprot.jsx'
import EX02_ButtonTest from './EX02_ButtonTest.jsx'
import Ex03_Library from './Ex03_Library';
import Ex04_TripTest from './Ex04_TripTest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    {/* 1. export test */}
    {/* <Ex01_Exprot/> */}

     {/* 2. Book + Library */}
      {/* <Ex03_Library /> */}

    {/* 3. Button컴포넌트 + img */}
    {/* <EX02_ButtonTest /> */}

    {/* 4.Trip 예제 */}
     <Ex04_TripTest/>
   </div>
  </StrictMode>,
)
