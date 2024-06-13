import React,{useState} from 'react';

import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
//import Footer from './customer/components/Footer/Footer';
//import Product from './customer/components/Product/Product';
import {Routes,Route} from 'react-router-dom'
import CustomerRouters from './customer/components/Routers/CustomerRouters';
//import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Checkout from './customer/components/Checkout/Checkout';
import Register from './customer/components/pages/Register/Register';
import Login from './customer/components/pages/Login/Login';
import Navbar from './client/Navbar/Navbar';
import { Home } from './client/Home/Home';
import BestSellingProd from './client/BestSellingProducts/BestSellingProd';
import ProductDetails from './client/ProductDetails/ProductDetails';
import ProductDetils from './client/ProductDetails/ProductDetails';
import Product from './client/Products/Products';
import Footer from './client/Footer/Footer';

function App() {
  // const [darkTheme,setDarkTheme] = useState(false);
  return (
    <div className="">
      {/* <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes> */}
     <div>
      <Navbar/>
       {/* <Home/> */}
     {/* <BestSellingProd/> */}
     <Product/>
     {/* <ProductDetils/> */}


      {/* <Navigation/> */}
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <ProductDetails/> */}
      {/* <Checkout /> */}
      {/* <Cart/> */}
      <Footer/>
     </div>

    </div>
  );
}

export default App;
