import React from 'react'

function ItemCount() {
    const [number, setNumber] = React.useState(0)
    
    const increase = () => (number < 5) && setNumber(number + 1)

    const decrease = () => (number > 1) && setNumber(number - 1)

    return (
        <>
            <button onClick={increase}>-</button>
            <p>{number}</p>
            <button onClick={decrease}>+</button>
        </>
    )
}

export { ItemCount }