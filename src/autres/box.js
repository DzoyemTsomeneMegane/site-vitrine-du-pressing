import react from "react";


function MyBox({background,color,padding, margin, className,border, onClick, onHover}){
    const BoxStyle={
        background: background|| 'white',
        color:color || 'black',
        padding: padding|| '15px 18px',
        margin: margin || '115px 585px',
        border:'2px solid blue',
    }
    return(
        <div className={className} style={BoxStyle} >
            {/* contenue peut etre du texte ou une image ou les deux  */}
            hello qui suis-je? comment tu vas toi? cherche moi dans le besoin, d'accord? je serai ravi de t'aider.
        </div>
    )

}


export default MyBox;