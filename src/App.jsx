import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Artists from "./pages/Artists";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
// Navbar
function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Makeover Magic ✨
      </Link>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link to="/booking" className="book-button">
        Book Now
      </Link>
    </header>
  );
}
// Footer
function Footer() {
  return (
    <footer className="footer">
      <h3>Makeover Magic ✨</h3>
      <p>Beauty • Style • Confidence</p>
      <p>
        © {new Date().getFullYear()} Makeover Magic.
        All rights reserved.
      </p>
    </footer>
  );
}
// Page not found
function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}
// Main App
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;