import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import Content from './components/Content/Content';
import Zayvka from './components/Zayvka/Zayvka';


function App() {
  return (
    <div className="App">
      <Header />
    <  Article /> 
      <Content />
      <Zayvka />
      <Footer  />
    </div>
  );
}

export default App;


