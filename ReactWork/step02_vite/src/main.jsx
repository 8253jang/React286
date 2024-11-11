import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './components/Button.jsx'

import mail from "./assets/mail.png";
import location from "./assets/location.png";
import search from "./assets/search.png";
import emotion1 from './assets/emotion1.png';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className="divButton">
     <Button text={"메일"} img={mail} imgId={2}/>
     <Button text={"위치"} img={location} imgId={1}/>
     <Button text={"검색"} img={search} imgId={3}/>
     <img src="/emotion5.png"/>
    </div>
  </StrictMode>,
)
