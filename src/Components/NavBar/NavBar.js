import React from 'react'
import './NavBar.css'

function Navbar() {
    return(
        <div className="navbar">
            <h1 className="navbar--title">Futuro nombre/logo de la tienda</h1>
            <div className="navbar--links">
                <span className="links">electronics</span>
                <span className="links">jewelery</span>
                <span className="links">men's clothing</span>
                <span className="links">women's clothing</span>
                {/* porque no use una etiqueta <a>? vease el link debajo* */}
            </div>
        </div>
    )
}
 
//    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/18266282424c546f47a74f842a7bf62bdde1d5e8/docs/rules/anchor-is-valid.md
    
//    Revisar caso: "I want navigable links" 


export { Navbar }