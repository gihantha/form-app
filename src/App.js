import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
