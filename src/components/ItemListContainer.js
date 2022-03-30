import { ItemCount } from './ItemCount'

function ItemListContainer(props) {
    return(
        <>
            <ItemCount initial={1} stock={5} />
        </>
    ) 
}

export { ItemListContainer }