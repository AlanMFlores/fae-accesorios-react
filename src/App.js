import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route path={'/'} element={<ItemListContainer />} />
            <Route path={'/category/:category'} element={<ItemListContainer/>} />
            <Route path={'/item/:id'} element={<ItemDetailsContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout'} element={<Checkout />} />
            <Route path={'*'} element={<Error />} />
          </Routes>
        <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
