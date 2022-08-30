import './App.css';
import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import productService from "./services/products"
import Home from "./components/Home"
import Header from './components/Header'
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import PaymentPage from './components/PaymentPage';
import PaymentDone from './components/PaymentDone';

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [orderNum, setOrderNum] = useState('')

  useEffect(() => {
    productService.getAll().then(res => setProducts(res))
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/products" element={<Products items={products} />} />
        <Route path="/products/:productId" element={<ProductInfo cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} setOrderNum={setOrderNum} />} />
        <Route path='/payment' element={<PaymentPage orderNum={orderNum}/>}/>
        <Route path='/paymentDone' element={<PaymentDone />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;
