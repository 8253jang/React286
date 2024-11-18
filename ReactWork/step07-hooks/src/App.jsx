import { useState } from 'react'

import './App.css'
import Effect01 from './Effect01'
import Effect02 from './Effect02'
import Memo01 from './Memo01'
import Ref01 from './Ref01'
import Ref02 from './Ref02'
import Ref03 from './Ref03';
import Ref04 from './Ref04'
import Context01 from './Context01'

function App() {
  return (
    <>
      {/* 1. useEffect  test */}
      {/* <Effect01/> */}

      {/* 2.useEffect cleanup작업 test */}
      {/* <Effect02 /> */}
      
      {/* 3. useMemo */}
      <Memo01 />

      {/* 4. useRef */}
      {/* <Ref01/> */}
      {/* <Ref02/> */}
      {/* <Ref03/> */}
      {/* <Ref04 /> */}

      {/* 5.Context */}
      {/* <Context01/> */}
    </>
  )
}

export default App
