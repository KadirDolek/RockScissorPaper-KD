import React from 'react';
import './Content.css'

export default function Content({onMakeChoice}) {
    const paper = <img style={{ cursor: 'pointer' }} id='paper' src="../src/assets/images/icon-paper.svg" alt="papier"/>
    const rock = <img style={{ cursor: 'pointer' }} id='rock' src="../src/assets/images/icon-rock.svg" alt="pierre"/>
    const scissor = <img style={{ cursor: 'pointer' }} id='scissor' src="../src/assets/images/icon-scissors.svg" alt="ciseaux"/>
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
                    src="../src/assets/images/icon-paper.svg"
                    alt="papier"
                />
            </div>
            <div id='divScissor' style={{ width: '300px', height: '250px' }}>
                <img
                    style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                    id='scissor'
                    src="../src/assets/images/icon-scissors.svg"
                    alt="ciseaux"
                />
            </div>
            <div id='divRock' style={{ width: '250px', height: '250px' }}>
                <img
                    style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                    id='rock'
                    src="../src/assets/images/icon-rock.svg"
                    alt="pierre"
                />
            </div>
            
        </div>
    );
}
