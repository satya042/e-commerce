import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../Cart/Cart'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Product from '../Product/Product'


const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:labelOne/:labelTwo/:labelThree' element={<Product/>}></Route>
            <Route path='/' element={HomePage}></Route>
            <Route path='/' element={HomePage}></Route>
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters