function Bton  ({contenu, background, color, className,onClick}) {
    const styleBouton={
        background: background|| 'ligthblue',
        color: color || 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
    }
    return (
        <button style={styleBouton} className={className}>
            {contenu}
        </button>
    )
};

export default Bton;