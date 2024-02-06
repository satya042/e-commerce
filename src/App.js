import React,{useState} from 'react';

import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import {Routes,Route} from 'react-router-dom'
import CustomerRouters from './customer/components/Routers/CustomerRouters';

function App() {
  // const [darkTheme,setDarkTheme] = useState(false);
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
     <div>
      <HomePage/>
      {/* <Product/> */}
     </div>

    </div>
  );
}

export default App;
