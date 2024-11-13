import React from 'react';
import './Ex02_ButtonTest.css';
import Button from './components/Button';

import mail from "./assets/mail.png";
import location from "./assets/location.png";
import search from "./assets/search.png";

const EX02_ButtonTest = () => {
    return (
        <div className="divButton">
        <Button text={"메일"} img={mail} imgId={2}/>
        <Button text={"위치"} img={location} imgId={1}/>
        <Button text={"검색"} img={search} imgId={3}/>
        <Button  img={search} imgId={3}/>
     <img src="/emotion5.png"/>
    </div>
    );
};

export default EX02_ButtonTest;