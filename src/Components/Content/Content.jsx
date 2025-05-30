import React from 'react';
import './Content.css'
import Pierre from '/src/assets/images/icon-rock.svg'
import Papier from '/src/assets/images/icon-paper.svg'
import Ciseaux from '/src/assets/images/icon-scissors.svg'

export default function Content({onMakeChoice}) {
    const paper = <img style={{ cursor: 'pointer' }} id='paper' src={Papier}/>
    const rock = <img style={{ cursor: 'pointer' }} id='rock' src={Pierre} alt="pierre"/>
    const scissor = <img style={{ cursor: 'pointer' }} id='scissor' src={Ciseaux} alt="ciseaux"/>
    const choixRandom = [paper, rock, scissor]

    const handleClick = (e) => {
        const elementId = e.target.id;
        // -----------------------------------  Compliqué ici --------------------------
        const elementClique = choixRandom.find(choix => choix.props.id === elementId);
        // -----------------------------------------------------------------------------
        const choixAleatoire = choixRandom[Math.floor(Math.random() * choixRandom.length)];
        onMakeChoice(elementClique, choixAleatoire);
    };

    return (
        <div id='content1'>
            <div id='divPaper' style={{ width: '300px', height: '250px' }}>
                <img
                    style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                    id='paper'
                    src={Papier}
                    alt="papier"
                />
            </div>
            <div id='divScissor' style={{ width: '300px', height: '250px' }}>
                <img
                    style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                    id='scissor'
                    src={Ciseaux}
                    alt="ciseaux"
                />
            </div>
            <div id='divRock' style={{ width: '250px', height: '250px' }}>
                <img
                    style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                    id='rock'
                    src={Pierre}
                    alt="pierre"
                />
            </div>
            
        </div>
    );
}
