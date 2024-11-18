import React from 'react';
import { useState } from 'react';
import Timer from './components/Timer';


const Effect02 = () => {
    const [showTimer , setShowTimer] = useState(false);
    return (
        <div>
           <h3>useEffect cleanup작업 test</h3> 
           {showTimer && <Timer/>}
           <button onClick={()=>{
             setShowTimer(!showTimer)
           }}>Toggle Timer</button>
        </div>
    );
};

export default Effect02;