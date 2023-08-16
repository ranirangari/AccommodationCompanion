import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navigation from '../student/components/Navigation/Navigation'
import Footer from '../student/components/Footer/Footer'
import HomePage from '../student/pages/HomePage/HomePage'
import Cart from '../student/components/Cart/Cart'
import Product from '../student/components/Product/Product'
import ProductDetails from '../student/components/ProductDetails/ProductDetails'
import Checkout from '../student/components/Checkout/Checkout'
import Order from '../student/components/Order/Order'
import OrderDetails from '../student/components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation />
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

       
   
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>

  )
}

export default CustomerRouters
