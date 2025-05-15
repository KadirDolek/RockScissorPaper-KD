import React,{ useState } from 'react';
import './Content.css'


export default function Content() {
    
    const choixRandom =['paper', 'rock','scissor']
    const [monChoix, setMonChoix] = useState('');
    const [choixOrdi, setChoixOrdi] = useState('');


    const handleClick = (e) => {
        const monClick = e.target.id;
        choixAleatoire = choixRandom[Math.floor(Math.random() * choixRandom.length)];
        setMonChoix =(monClick)
        setChoixOrdi(choixAleatoire)

        {monClick == 'paper' && setChoixOrdi =='rock' ? "Bg" : none }
        
        
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
