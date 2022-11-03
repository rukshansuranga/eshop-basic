import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart'
import Checkout from './Components/Checkout';

//const [store, setStore] = useState({ userName: 'admin', email: 'admin@gmail.com', address: 'test' })

const store = { userName: 'admin', email: 'admin@gmail.com', address: 'test' };

const StoreContext = createContext({});
export { StoreContext }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StoreContext.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
