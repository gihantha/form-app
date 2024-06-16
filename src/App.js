import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Row from 'react-bootstrap/Row';
import NavbarCom from './components/Navbar'; 
import Form from './components/Form';
import Content from './components/Content';

function App() {
  return (
    <div className='App'>
      <Router>
        <Row style={{ width: "100%", height: "100%" }}>
          <NavbarCom />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Row>
      </Router>
    </div>
  );
}

export default App;
