import styleCard from '../Card/Card.module.css'
import styleButton from '../Button/Button.module.css'


export default function PizzaCard({ data }) {

    if (data.published === false) {
        return null
    }

    function getTagClass(tags) {
        let classNames = styleCard.tags;

        if (tags.includes('html')) {
            classNames += ` ${styleCard.red}`;
        }
        if (tags.includes('css')) {
            classNames += ` ${styleCard.blue}`;
        }
        if (tags.includes('js')) {
            classNames += ` ${styleCard.yellow}`;
        }
        if (tags.includes('php')) {
            classNames += ` ${styleCard.green}`;
        }

        return classNames;
    }

    return (
        <div className={styleCard.card} >
            <img src={data.image} className={styleCard.cardImg} alt="" />
            <div className={styleCard.cardBody}>
                <h5 className={styleCard.cardTitle}>{data.title}</h5>
                <p className={styleCard.cardText}>{data.content} </p>
                <a href={data.link} className={styleButton.btn}>Ricetta</a>
                <div className={styleCard.tags}>
                    {data.tags.map((tag, index) => (
                        <span key={index} className={getTagClass(tag)}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div >
    )
}

