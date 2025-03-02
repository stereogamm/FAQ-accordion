import '../App.css';
import ListComponent from './ListComponent';

function Card() {
    return (
        <>
        <main className='card__wrapper'>
            <section className='card'>
                <h1>FAQs</h1>
                <ListComponent />
                <ListComponent />
            </section>
         </main>
        </>
    )
}

export default Card;