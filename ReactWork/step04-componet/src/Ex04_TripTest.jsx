import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';

import './Ex04_TripTest.css';

const Ex04_TripTest = () => {
    return (
        <>
        <Header title="Trip"/>
        <Nav />
        <Article title="태어난김에..세계일주하자!" body="올 여름의 최고의 찬스" />
       </>
    );
};

export default Ex04_TripTest;