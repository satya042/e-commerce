import React,{useState} from 'react';

import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  const [darkTheme,setDarkTheme] = useState(false);
  return (
    <div className="">
     <Navigation/>
     <div>
      {/* <HomePage/> */}
      <Product/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
