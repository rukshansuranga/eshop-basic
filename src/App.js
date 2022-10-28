import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import { Outlet } from 'react-router-dom';
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
