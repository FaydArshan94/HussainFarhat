// src/routes/MainRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PersonalTraining from "../pages/PersonalTraining";
import Packages from "../pages/Packages";
import Book from "../pages/Book";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/personal-training" element={<PersonalTraining />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/book" element={<Book />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
