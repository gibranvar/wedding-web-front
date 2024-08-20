import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingView from './views/Loading/Loading';
import Home from './views/Home/Home';
import './App.css';
import LoadingView from './views/Loading/Loading';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LoadingView/>}/>
          <Route path="/home" element={<Home />} />
           <Route path="/guests" element={<Guests />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
