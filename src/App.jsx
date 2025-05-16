import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Bagarre from './Components/Bagarre/Bagarre'
import ShowRules from './Components/ShowRules/ShowRules'

function App() {
  const [point, setPoint] = useState(0)
  const [showBagarre, setShowBagarre] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const [monChoix, setMonChoix] = useState('')
  const [choixOrdi, setChoixOrdi] = useState('')
  const [showRules, setShowRules] = useState(false)

  const handleGameChoice = (playerChoice, computerChoice) => {
    setMonChoix(playerChoice)
    setChoixOrdi(computerChoice)
    setShowBagarre(true)
    setShowContent(false)

    if (
      (playerChoice.props.id === 'scissor' && computerChoice.props.id === 'paper') ||
      (playerChoice.props.id === 'rock' && computerChoice.props.id === 'scissor') ||
      (playerChoice.props.id === 'paper' && computerChoice.props.id === 'rock')
    ) {
      setPoint(prevPoint => prevPoint + 1)
    } else if (
      (playerChoice.props.id === 'scissor' && computerChoice.props.id === 'rock') ||
      (playerChoice.props.id === 'rock' && computerChoice.props.id === 'paper') ||
      (playerChoice.props.id === 'paper' && computerChoice.props.id === 'scissor')
    ) {
      setPoint(prevPoint => prevPoint - 1)
    }
  }
  const handleRestart = () => {
    setShowBagarre(prev=> !prev)
    setShowContent(open=> !open)
  }
  const Rules = () => {
    setShowRules(true);
  };
  const Close = ()=>{
    setShowRules(false)
  }

  return (
    <>
      <Header point={point}/>
      {showContent && <Content onMakeChoice={handleGameChoice}/>}
      {showBagarre && <Bagarre handleRestart={handleRestart} point={point} monChoix={monChoix} choixOrdi={choixOrdi}/>}
      <h4 id='titrerules1' onClick={Rules}>
        RULES
      </h4>
      {showRules && <ShowRules onClose={Close}/>}
    </>
  )
}

export default App
