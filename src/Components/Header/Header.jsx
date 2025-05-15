import './Header.css'

export default function Header({point}){

    

    return(
         <div id='header'>
            <div id='header2'>
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
            </div>
            <div id='header3'>
                <p>SCORE</p>
                <span>{point}</span>
            </div>
        </div>
    )
}