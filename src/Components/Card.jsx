import React, {useState} from 'react';
import '../App.css';
import ListComponent from './ListComponent';

function Card() {
    const [open, setOpen] = useState(false);

    function handleItemState() {
        setOpen((prev) => !prev);
    }
    return (
        <>
        <main className='card__wrapper'>
            <section className='card'>
                <h1>FAQs</h1>
                <ListComponent onClick={handleItemState} isOpen={open}/>
                <ListComponent />
            </section>
         </main>
        </>
    )
}

export default Card;