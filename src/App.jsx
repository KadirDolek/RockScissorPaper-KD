import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Bagarre from './Components/Bagarre/Bagarre'



function App() {

  const [point, setPoint] = useState(0)
  const [showBagarre, setShowBagarre] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const [monChoix,setMonChoix] = useState('')
  const [choixOrdi,setChoixOrdi]= useState('')

    const handleGameChoice = (playerChoice, computerChoice) => {
      setMonChoix(playerChoice)
      setChoixOrdi(computerChoice)
      setShowBagarre(true)
      setShowContent(false) // Ajout de cette ligne pour cacher Content

      if (
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
      ) {
        setPoint(prevPoint => prevPoint + 1)
      } else if (
        (playerChoice === 'scissor' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissor')
      ) {
        setPoint(prevPoint => prevPoint - 1)
      }
      // Le cas d'égalité est implicite (pas besoin de changer le score)
    }

  const handleRestart = () => {
    setShowBagarre(prev=> !prev)
    setShowContent(open=> !open)
  }

  return (
    <>
      <Header point={point}/>
      {showContent && 
        <Content onMakeChoice={handleGameChoice}/>
      }
      {showBagarre &&
        <Bagarre 
          handleRestart={handleRestart}
          point={point}
          monChoix={monChoix}
          choixOrdi={choixOrdi}
        />
      }
    </>
  )
}

export default App
