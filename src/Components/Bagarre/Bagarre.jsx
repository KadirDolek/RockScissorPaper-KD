import './Bagarre.css'

export default function Bagarre({monChoix, choixOrdi, handleRestart }){
    
    let resultat = "";
    // Compare les IDs des éléments reçus
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

    // Pour débugger
    console.log('monChoix:', monChoix.props.id);
    console.log('choixOrdi:', choixOrdi.props.id);

    return(
        <>
            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'7.5%'}}>
                <div>
                    <p>Tu as choisi</p>
                    {/* Affiche directement l'élément image reçu */}
                    <div style={{textAlign:'center'}}>{monChoix}</div>
                </div>
                <div style={{marginTop:'10%'}}> 
                    <p id='phrase'>{resultat}</p>
                    <button onClick={handleRestart} id='restart'>PLAY AGAIN</button>
                </div>
                <div>
                    <p>L'ordi a choisi </p>
                    <div style={{textAlign:'center'}}>{choixOrdi}</div>
                </div>
            </div>
        </>
    )
}
