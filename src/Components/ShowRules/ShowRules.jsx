import './ShowRules.css'
import Croix from '/src/assets/images/icon-close.svg'
import Regles from '/src/assets/images/image-rules.svg'

export default function ShowRules({ onClose }) {
    return (
        <div id='layout' onClick={onClose}>
            <div id='showrules'>
                <div id='container-titre'>
                    <h4 id='titrerules'>RULES</h4>
                    <img
                        onClick={onClose}
                        id='closebtn'
                        src={Croix}
                        alt="close"
                    />
                </div>
                <div id='imgRules'>
                    <img src={Regles} alt="rules" />
                </div>
            </div>
        </div>
    )
}