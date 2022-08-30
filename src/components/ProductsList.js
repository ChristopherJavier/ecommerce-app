import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductList = ({ products }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(products.sort((a, b) => b.price - a.price).slice(0, 5))
    }, [products])

    if (!items) {
        return null
    }

    return (
        <div className="productsList-cont">
            <h2>Products</h2>
            <div className="productsList">
                {items.map(item =>
                    <Link
                        to={`/products/${item.id}`}
                        key={item.id}
                    >
                        <div className="card">
                            <div className="card-visual">
                                <img className="card-visual-img" src={item.image} alt={item.name} />
                            </div>
                            <h1>{item.name}</h1>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ProductList