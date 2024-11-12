import styleCard from '../Card/Card.module.css'
import styleButton from '../Button/Button.module.css'
import Margherita from '../assets/margherita.jpg'

export default function AppMain() {
    return (
        <main className='container'>
            <div className={styleCard.card} >
                <img src={Margherita} className={styleCard.cardImg} alt="" />
                <div className={styleCard.cardBody}>
                    <h5 className={styleCard.cardTitle}>Pizza Margherita</h5>
                    <p className={styleCard.cardText}>La pizza margherita, insieme alla pizza marinara, è una delle versioni più semplici e amate della pizza! </p>
                    <a href="#" className={styleButton.btn}>Ricetta</a>
                </div>
            </div >
        </main>

    )
} 