import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar/>
          <section className='container'>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/login'  element={<Login/>} />
              <Route path='/menu'  element={<Menu/>} />
              <Route path='/cart'  element={<Cart/>} />
              <Route path='/checkout'  element={<Checkout/>} />
            </Routes>
          </section>
        </Router>
      </div>
    </>
  );
}

export default App;
