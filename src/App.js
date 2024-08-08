import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
