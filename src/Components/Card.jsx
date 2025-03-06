import React, {useState} from 'react';
import '../App.css';
import ListComponent from './ListComponent';

function Card() {
    const [openIndex, setOpenIndex] = useState(null);

    function handleItemState(index) {
        setOpenIndex((prevIndex) => (prevIndex === index? null : index));
    }
    return (
        <>
        <main className='card__wrapper'>
            <section className='card'>
                <h1>FAQs</h1>
                <ListComponent onClick={handleItemState} openIndex={openIndex}/>
            </section>
         </main>
        </>
    )
}

export default Card;