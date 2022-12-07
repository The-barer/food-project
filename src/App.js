import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NotFound } from "./pages/404";
import { About } from "./pages/About";
import { Category } from "./pages/Category";
import { Meal } from "./pages/Meal";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Meal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
