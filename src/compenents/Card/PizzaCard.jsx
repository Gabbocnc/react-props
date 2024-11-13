import styleCard from '../Card/Card.module.css'
import styleButton from '../Button/Button.module.css'


export default function PizzaCard({ data }) {
    return (
        <div className={styleCard.card} >
            <img src={data.image} className={styleCard.cardImg} alt="" />
            <div className={styleCard.cardBody}>
                <h5 className={styleCard.cardTitle}>{data.title}</h5>
                <p className={styleCard.cardText}>{data.content} </p>
                <a href={data.link} className={styleButton.btn}>Ricetta</a>
            </div>
        </div >
    )
}