import styleCard from '../Card/Card.module.css'
import styleButton from '../Button/Button.module.css'

export default function AppMain() {
    return (
        <main className='container'>
            <div className={styleCard.card} >
                {/*    <img src="" alt="" /> */}
                <div className={styleCard.cardBody}>
                    <h5 class={styleCard.cardTitle}>Card title</h5>
                    <p class={styleCard.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class={styleButton.btn}>Go somewhere</a>
                </div>
            </div >
        </main>

    )
} 