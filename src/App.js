import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import MakeDistribution from './components/pages/MakeDistributions';
import ModelYearGrowth from './components/pages/ModelYearGrowths';


function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make-distribution" element={<MakeDistribution/>} />
          <Route path="/model-year-growth" element={<ModelYearGrowth/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
