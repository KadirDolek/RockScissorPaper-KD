import './Bagarre.css'
import Header from '../Header/Header'

export default function Bagarre({ point, monChoix, choixOrdi, handleRestart }){
    
    // Ajout de la logique pour déterminer le résultat
    let resultat = "";
    if (
        (monChoix === 'scissor' && choixOrdi === 'paper') ||
        (monChoix === 'rock' && choixOrdi === 'scissor') ||
        (monChoix === 'paper' && choixOrdi === 'rock')
    ) {
        resultat = "YOU WIN!";
    } else if (
        (monChoix === 'scissor' && choixOrdi === 'rock') ||
        (monChoix === 'rock' && choixOrdi === 'paper') ||
        (monChoix === 'paper' && choixOrdi === 'scissor')
    ) {
        resultat = "YOU LOSE!";
    } else {
        resultat = "DRAW!";
    }

    return(
        <>
            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'7.5%'}}>
                <div>
                    <p>Tu as choisi</p>
                    <p>{monChoix}</p>
                </div>
                <div style={{marginTop:'10%'}}> 
                    <p id='phrase'>{resultat}</p>
                    <button onClick={() => handleRestart()} id='restart'>PLAY AGAIN</button>
                </div>
                <div>
                    <p>Ton adversaire a choisi </p>
                    <p>{choixOrdi}</p>
                </div>
            </div>
        </>
    )
}
