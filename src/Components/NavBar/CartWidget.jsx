import React from "react";
import './cartWidget.css'
import 'materialize-css'


function CartWidget() {
    return (
        <>
            <div>

                <span className="container--cartIcon material-icons">
                    <i className="material-icons-outlined">shopping_cart</i>
                </span>

                <span className="cartIcon--amount red">
                    20
                </span>
            </div>


            
        </>
    )
}

export { CartWidget }