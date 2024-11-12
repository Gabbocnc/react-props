import styleCard from '../Card/Card.module.css'
import styleButton from '../Button/Button.module.css'
import Diavola from '../assets/diavola.jpg'

export default function PizzaCardDiavola() {
    return (
        <div className={styleCard.card} >
            <img src={Diavola} className={styleCard.cardImg} alt="" />
            <div className={styleCard.cardBody}>
                <h5 className={styleCard.cardTitle}>Pizza Diavola</h5>
                <p className={styleCard.cardText}>La pizza alla diavola viene preparata stendendo la pasta per la pizza, condendola con la passata di pomodoro e lasciandola cuocere in forno per 10 minuti. </p>
                <a href="https://www.buonissimo.it/lericette/5877_Pizza_alla_diavola" className={styleButton.btn}>Ricetta</a>
            </div>
        </div >
    )
}