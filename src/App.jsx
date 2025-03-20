
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TehsilMohallaDashboard from './pages/TehsilMohallaDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TehsilMohallaDashboard />} />
    </Routes>
  );
};

export default App;