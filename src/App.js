import "./App.css";
import Footer from "./student/components/Footer/Footer";
import Navigation from "./student/components/Navigation/Navigation";
import HomePage from "./student/pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
