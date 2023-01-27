import logo from './logo.svg';
import './App.css';

import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Form from "./components/Form";
import ConfirmPage from "./components/ConfirmationPage";

function Home(props) {
  const navigate = useNavigate();
  

  return (
  <>
  <div className="App-image">
    <h3>Hungry, Hungry Coders</h3>
    <button id="order-pizza" onClick={() => navigate("/pizza")}>Order Now!</button>
  </div>
  </>
  )
}

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Bloomtech Eats</h1>
      <nav className="App-link">
        <Link to="/" id="home"><button>Home</button></Link>
        <Link to="/pizza"><button>Order</button></Link>
      </nav>
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/pizza" element={<Form />} /> 
      <Route path="/confirmation" element={<ConfirmPage />} />
    </Routes>
    </header>
    </div>
  );
};

export default App;
