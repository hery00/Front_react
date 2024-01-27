import { useState } from "react";

const Panier = () => 
{
    
    return ( <>
            <p>{countPanier}</p>
            <button onClick={addpanier}>add panier</button>
        </>
    )
}
export default Panier;