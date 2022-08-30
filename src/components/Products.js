import { Link } from "react-router-dom"

const Products = ({ items }) => {

    return (
        <div className="all-products">
            <div className="all-products-container">
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

export default Products