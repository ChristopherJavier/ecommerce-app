import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import productService from "../services/products"

const ProductInfo = ({ cart, setCart }) => {
    const [productInfo, setProductInfo] = useState({})
    let params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        productService.getOne(params.productId).then(res => setProductInfo(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!productInfo) {
        return null
    }

    const addProduct = (product) => {
        cart.find(i => i.id === product.id)
            ? navigate("/Cart")
            : setCart(cart.concat(product))
    }

    return (
        <div className="productInfo-cont">
            <div className="productInfo-text">
                <h2>{productInfo.name}</h2>
                <p>{productInfo.description}</p>
                <span>${productInfo.price}</span>
            </div>
            <div className="productInfo-visual">
                <img src={productInfo.image} alt={productInfo.name} />
            </div>
            {cart.find(i => i.id === productInfo.id) && <span>The item was added to the cart</span>}
            <button className="bg-blue-400" onClick={() => addProduct(productInfo)}>Add to Cart</button>
        </div>
    )
}

export default ProductInfo