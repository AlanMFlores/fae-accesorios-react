import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting={'Bienvenido a FAE Accesorios'}/>} />
          <Route path={'/category/:category'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
