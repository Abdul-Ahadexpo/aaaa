import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Converter from './components/Converter';
import Instructions from './components/Instructions';
import Learn from './components/Learn';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
        <Navbar />
        
        <main className="flex-grow pb-20">
          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;