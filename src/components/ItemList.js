import { useEffect, useState } from 'react'
import { Item } from './Item'





function ItemList() {
    const [error, setError] = useState(null)
    const [isLoad, setIsLoad] = useState(false)
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')

        .then(response => response.json())
        .then(result => {
                setIsLoad(true)
                setInfo(result)
            },
        
            (error) => {
                setIsLoad(true)
                setError(error)
            }
        )
    }, [])


    if (error) {
        return (
        <>
            <p>Algo salio mal</p>
        </>
    )} else if(isLoad && !!info) {
        return (
            <Item 
                title={info.title} 
                description={info.description} 
                image={info.image} />
        )} 


    return(
        <>
            <p>Por favor, espere</p>
        </>
    )

}


export {ItemList }
