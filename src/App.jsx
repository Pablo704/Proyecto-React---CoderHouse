import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import Slider from './componentes/Slider/Slider'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'
import { CartProvider } from './context/cartContext'
import Checkout from './componentes/Checkout/Checkout';
import Feature from './componentes/Features/Feature';



const AppContent = () => {
  const location = useLocation()
  const [showProducts, setShowProducts] = useState(false)

  const shouldHideSlider = location.pathname === '/cart' || 
                           location.pathname.startsWith('/detalle/') || 
                           location.pathname === '/checkout';

  const shouldHideFeatures = location.pathname === '/cart' || 
                           location.pathname.startsWith('/detalle/') || 
                           location.pathname === '/checkout' ||
                           location.pathname.startsWith('/categoria/');
  
  const handleToggleProducts = () => {
    setShowProducts(prevState => !prevState);
  };

  useEffect(() => {
    setShowProducts(false);
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      {!shouldHideSlider && <Slider />}
      {!shouldHideFeatures && <Feature onToggleProducts={handleToggleProducts} showProducts={showProducts} />}

      {showProducts && location.pathname === '/' && (
        <ItemListContainer /> 
      )}


      <Routes>
        <Route path='/' element={showProducts ? <ItemListContainer /> : <div />} />
        {/* <Route path='/' element={<ItemListContainer />} /> */}
        <Route path='/categoria/:category' element={<ItemListContainer />} /> 
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
