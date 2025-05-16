import './ShowRules.css'

export default function ShowRules({ onClose }) {
    return (
        <div id='layout' onClick={onClose}>
            <div id='showrules'>
                <div id='container-titre'>
                    <h4 id='titrerules'>RULES</h4>
                    <img
                        onClick={onClose}
                        id='closebtn'
                        src="../src/assets/images/icon-close.svg"
                        alt="close"
                    />
                </div>
                <div id='imgRules'>
                    <img src="../src/assets/images/image-rules.svg" alt="rules" />
                </div>
            </div>
        </div>
    )
}