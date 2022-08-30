import { Outlet, Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/"><span className="logo">E-Store</span></Link>
            </div>
            <Link to={`/products`}><span>Products</span></Link>
            <div className="cart-side">
                <Link to="/Cart"><span>Cart</span></Link>
            </div>
            <Outlet />
        </header>
    )
}

export default Header