import cartService from "../services/cart"
import { useNavigate } from "react-router-dom"

const Cart = ({ cart, setCart, setOrderNum }) => {
    let navigate = useNavigate()

    if (!cart || cart.length === 0) {
        return (
            <h2>
                There is not items in the cart
            </h2>
        )
    }

    const handleTotal = (cart) => {
        const itemPrices = cart.map(i => i.price)
        const total = itemPrices.reduce((a, b) => a + b)
        return total
    }

    const handleRemove = (id) => {
        setCart(cart.filter(i => i.id !== id))
    }

    const handleCheckout = () => {
        const items = cart.map(i => i.id)
        /* cartService.checkoutItems(items).then(data => setOrderNum(data)) */
        setOrderNum('A3B1123cade')
        const removedItems = cart.splice(cart.length, 0)
        setCart(removedItems)
        navigate("/payment")
    }

    return (
        <div>
            {cart.map(item =>
                <div key={item.id} className="cartItem-card">
                    {item.name}
                    <br/>
                    {item.price}
                    <img alt={item.name} width="100px" src={item.image} />
                    <button onClick={() => handleRemove(item.id)}>X</button>
                </div>
            )}
            {
                cart.length === 1
                    ? (<span>Total: {cart[0].price}</span>)
                    : (<span>Total: {handleTotal(cart)}</span>)
            }
            <br />
            <button className="payButton" onClick={() => handleCheckout()}>Pay</button>
        </div>
    )
}

export default Cart