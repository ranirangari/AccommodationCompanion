import "./App.css";
import Cart from "./student/components/Cart/Cart";
import Checkout from "./student/components/Checkout/Checkout";
import Footer from "./student/components/Footer/Footer";
import Navigation from "./student/components/Navigation/Navigation";
import Product from "./student/components/Product/Product";
import ProductDetails from "./student/components/ProductDetails/ProductDetails";
import HomePage from "./student/pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
