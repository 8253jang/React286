import { useState } from 'react'

import './App.css'
import Effect01 from './Effect01'
import Effect02 from './Effect02'
import Memo01 from './Memo01'

function App() {
  return (
    <>
      {/* 1. useEffect  test */}
      {/* <Effect01/> */}

      {/* 2.useEffect cleanup작업 test */}
      {/* <Effect02 /> */}
      
      {/* 3. useMemo */}
      <Memo01 />
    </>
  )
}

export default App
