import './Content.css'


export default function Content(){



    return(
        <div id='content1'>
            <div id='divPaper' style={{width:'300px', height:'250px'}}>
                <img id='paper' src="../src/assets/images/icon-paper.svg" alt="" />
            </div>
            <div id='divScissor' style={{width:'300px', height:'250px'}}>
                <img id='scissor' src="../src/assets/images/icon-scissors.svg" alt="" />
            </div>
            <div id='divRock' style={{width:'250px', height:'250px'}}>
                <img id='rock' src="../src/assets/images/icon-rock.svg" alt="" />
            </div>
 
        </div>
    )
}