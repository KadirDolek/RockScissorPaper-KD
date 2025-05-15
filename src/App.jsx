import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'



function App() {

  const [point, setPoint] = useState(0)


  return (

    <>
      <Header point={point}/>
      <Content/>
    </>
  )
}

export default App
