import React, { useState } from 'react';
import './Column.css'
import Card from '../Card/Card.js'

const Column = (props) => {
    
    const [cards, setCards] = useState([]);

    const addCard = () => {
         setCards([...cards, <Card/>]);
         
    };

    return(
        <div className='column'>
            <h3>{props.title}</h3>
                {cards.map((element) => (
                    <Card/>
                ))}
            <button className='botaoAdd' onClick={addCard}><strong> add </strong></button>    
        </div>

    );

}

export default Column;