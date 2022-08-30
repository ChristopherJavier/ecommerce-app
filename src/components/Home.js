import ProductsList from "./ProductsList"
import LandingBanner from "./LandingBanner"

const Home = ({ products }) => {
    return (
        <div>
            <LandingBanner items={products}/>
            <ProductsList products={products}/>
        </div>
    )
}

export default Home