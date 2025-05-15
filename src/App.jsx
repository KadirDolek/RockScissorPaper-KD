import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'


function App() {

  const [point, setPoint] = useState(0)


  return (

    <>
      <Header point={point}/>
    </>
  )
}

export default App
