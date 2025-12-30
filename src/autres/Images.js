function MyImage(image, alt,onImage, className,margin){
    const StyleImage={
        margin: margin || '25px 115px',
    }
    return(
        <div className={className} style={StyleImage}>
             <img src={image} alt={alt} />
        </div>
    )
}

export default MyImage;