import React from 'react'
import '../styles/ItemCount.css'
import Button from '@mui/material/Button';

function ItemCount() {
    const [number, setNumber] = React.useState(0)
    
    const increase = () => (number < 5) && setNumber(number + 1)

    const decrease = () => (number > 1) && setNumber(number - 1)

    return (
        <div class="d4--container">

            <Button onClick={decrease} variant="contained">-</Button>
            <p class="counter--text">{number}</p>
            <Button onClick={increase} variant="contained">+</Button>
        </div>
    )
}

export { ItemCount }