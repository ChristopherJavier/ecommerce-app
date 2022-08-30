import { useState, useEffect } from "react"

const LandingBanner = ({ items }) => {
    const [offerProduct, setOfferProduct] = useState([])

    useEffect(() => {
        const stockArr = items.map(i => i.stock)
        setOfferProduct(items.find(i => i.stock === Math.max(...stockArr)))
    }, [items])

    if (!items) {
        return null
    }

    return (
        offerProduct && (
            <div className="banner">
                <div className="banner-container">
                    <div className="banner-text">
                        <h2>Offer of the Month</h2>
                        <h3>{offerProduct.name}</h3>
                        <span>${offerProduct.price}</span>
                    </div>
                    <div className="banner-media">
                        <img src={offerProduct.image} alt={offerProduct.name} />
                    </div>
                </div>
            </div>
        )
    )
}

export default LandingBanner