import './Bagarre.css'

export default function Bagarre({monChoix, choixOrdi, handleRestart }){
    
    let resultat = "";
    if (
        (monChoix.props.id === 'scissor' && choixOrdi.props.id === 'paper') ||
        (monChoix.props.id === 'rock' && choixOrdi.props.id === 'scissor') ||
        (monChoix.props.id === 'paper' && choixOrdi.props.id === 'rock')
    ) {
        resultat = "YOU WIN!";
    } else if (
        (monChoix.props.id === 'scissor' && choixOrdi.props.id === 'rock') ||
        (monChoix.props.id === 'rock' && choixOrdi.props.id === 'paper') ||
        (monChoix.props.id === 'paper' && choixOrdi.props.id === 'scissor')
    ) {
        resultat = "YOU LOSE!";
    } else {
        resultat = "DRAW!";
        
    }


    // const playerEffetClass = resultat === "YOU WIN!" ? "winner" : "";
    // const computerEffetClass = resultat === "YOU LOSE!" ? "loser" : "";

    return(
        <>
            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'7.5%'}}>
                <div>
                    <p style={{textAlign:'center'}}>YOU PICKED</p>
                    <div className={playerEffetClass} style={{textAlign:'center'}}>
                        {monChoix}
                    </div>
                </div>
                <div style={{marginTop:'10%'}}> 
                    <p id='phrase'>{resultat}</p>
                    <button onClick={handleRestart} id='restart'>PLAY AGAIN</button>
                </div>
                <div>
                    <p style={{textAlign:'center '}}>THE HOUSE PICKED</p>
                    <div className={computerEffetClass} style={{textAlign:'center'}}>
                        {choixOrdi}
                    </div>
                </div>
            </div>
        </>
    )
}
