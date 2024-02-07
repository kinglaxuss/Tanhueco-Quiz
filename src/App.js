import React, { useState } from 'react';
import Header from './Components/Header'
import { Container } from 'react-bootstrap';
import HomeScreen from './Screens/HomeScreen';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'

function App()  {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    console.log('Adding to cart:', product);
    setCartItems([...cartItems, product]);
  }
  
  return (
      <Router>
      <Header />
        <main className='py-3'> 
          <Container>
            <Routes> 
              <Route path='/' element={<HomeScreen addToCart={addToCart} />} exact />
              <Route path='/cart' element={<Cart cartItems={cartItems} />} exact />
            </Routes>
            <ProductScreen />
          </Container>
        </main>
    </Router>
  );
}

export default App;
