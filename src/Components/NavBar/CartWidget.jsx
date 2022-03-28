import React from "react";
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function CartWidget() {
    return (
        <>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon/>
            </Badge>
        </>
    )
}

export { CartWidget }