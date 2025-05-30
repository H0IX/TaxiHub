import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SearchTaxis from './pages/SearchTaxis';
import Login from './pages/Login';
import Register from './pages/Register';
import CompanyRegistration from './pages/CompanyRegistration';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchTaxis />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/for-companies" element={<CompanyRegistration />} />
            <Route path="/booking/:id" element={<BookingForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;