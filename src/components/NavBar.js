import '../styles/NavBar.css'
import  { CartWidget } from './CartWidget'

function Navbar() {
    return(
        <div className="navbar">
            <h1 className="navbar--title">Futuro nombre/logo de la tienda</h1>
            <div className="navbar--links">
                <a href=".#" className="links">electronics</a>
                <a href=".#" className="links">jewelery</a>
                <a href=".#" className="links">men's clothing</a>
                <a href=".#" className="links">women's clothing</a>
            </div>
            <CartWidget/>
        </div>
    )
}


export { Navbar }