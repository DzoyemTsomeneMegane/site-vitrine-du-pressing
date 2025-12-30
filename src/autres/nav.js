import react from "react";
import Button from "./boutons";


function Mynav(padding, margin, background, color, className){
    const StyleNav={
        background: background|| 'gray',
        color:color || 'black',
        // padding:padding|| '18px 15px',
        margin: margin||'25px 45px',
        borderRadius:'10px',
    }
    return(
        <div style={StyleNav} className={className}>
            <Button contenu="connexion" color="white" background="blue" className="MonBouton"/>
        </div>
    )
}
export default Mynav;