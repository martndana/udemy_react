import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import CartContents from './components/Header/Cart/CartContents/CartContents';
import CartProvider from './store/CartProvider';

// import styles from './App.module.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const displayModalHandler = () => {
    setCartIsShown(true);
  }

  const hideModalHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <CartContents onHide={hideModalHandler}/>}
      <Header onShow={displayModalHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
