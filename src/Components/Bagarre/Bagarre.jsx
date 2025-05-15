import './Bagarre.css'

export default function Bagarre({monChoix, choixOrdi, handleRestart }){
    
    let resultat = "";
    if (
        (monChoix.props.id === 'scissor' && choixOrdi.props.id === 'paper') ||
        (monChoix.props.id === 'rock' && choixOrdi.props.id === 'scissor') ||
        (monChoix.props.id === 'paper' && choixOrdi.props.id === 'rock')
    ) {
        resultat = "YOU WIN!";
        // monChoix.style.border= "19px solid #3b4262";
    } else if (
        (monChoix.props.id === 'scissor' && choixOrdi.props.id === 'rock') ||
        (monChoix.props.id === 'rock' && choixOrdi.props.id === 'paper') ||
        (monChoix.props.id === 'paper' && choixOrdi.props.id === 'scissor')
    ) {
        resultat = "YOU LOSE!";
        // choixOrdi.style.border= "19px solid #3b4262";
    } else {
        resultat = "DRAW!";
        
    }

    console.log('monChoix:', monChoix.props.id);
    console.log('choixOrdi:', choixOrdi.props.id);

    return(
        <>
            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'7.5%'}}>
                <div>
                    <p style={{textAlign:'center'}}>YOU PICKED</p>
                    <div style={{textAlign:'center'}}>{monChoix}</div>
                </div>
                <div style={{marginTop:'10%'}}> 
                    <p id='phrase'>{resultat}</p>
                    <button onClick={handleRestart} id='restart'>PLAY AGAIN</button>
                </div>
                <div>
                    <p style={{textAlign:'center '}}>THE HOUSE PICKED</p>
                    <div style={{textAlign:'center'}}>{choixOrdi}</div>
                </div>
            </div>
        </>
    )
}
