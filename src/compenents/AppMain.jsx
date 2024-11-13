import PizzaCard from "./Card/PizzaCard.jsx"
import pizze from './data/Pizze.js'

export default function AppMain() {
    return (
        <main className='container'>
            {pizze.map(pizza => <PizzaCard key={pizza.id} data={pizza} />)}
        </main>

    )
} 