import "./App.css";
import { Routes,Route } from 'react-router-dom'
import CustomerRouters from "./Routers/CustomerRouters";
import Cart from "./student/components/Cart/Cart";
import Checkout from "./student/components/Checkout/Checkout";
import Footer from "./student/components/Footer/Footer";
import Navigation from "./student/components/Navigation/Navigation";
import Order from "./student/components/Order/Order";
import OrderDetails from "./student/components/Order/OrderDetails";
import Product from "./student/components/Product/Product";
import ProductDetails from "./student/components/ProductDetails/ProductDetails";
import HomePage from "./student/pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    
     
     
    </div>
  );
}

export default App;
