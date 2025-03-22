
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TehsilMohallaDashboard from './pages/TehsilMohallaDashboard';
import SavedRecords from './pages/SavedRecords';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TehsilMohallaDashboard />} />
      <Route path="/saved-records" element={<SavedRecords />} />
    </Routes>
  );
};

export default App;