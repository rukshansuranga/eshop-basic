const ProductCard = ({url, fileName, name, price}) => {

    return(
        <>
            <img src={`${url}${fileName}`} />
            <div>{name}</div>
            <div>{price}</div>
        </>
    )

}


//export {ProductCard}
export default ProductCard;

