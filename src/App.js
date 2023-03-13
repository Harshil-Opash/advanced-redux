import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';

function App() {
  const show = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch("https://react-http-6d5a0-default-rtdb.firebaseio.com/cart.json",{
      method : 'PUT',
      body : JSON.stringify(cart),
    })
  }, [cart])

  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;