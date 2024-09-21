
import './App.css';
import Nabar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (<>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Router>
        <Nabar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </>
  );
}

export default App;
