import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Pagenotfound } from "./components/Pages/Pagenotfound";
import { Login } from "./components/Pages/Login";
import { SignUp } from "./components/Pages/SignUp";
import { useState } from "react";
import { Dashboard } from "./components/Pages/Dashboard";
import { Footer } from "./components/Footer";




function App() {
  const [isLogin, setIsLogin] = useState(false)


  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login isLogin={isLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
  </>
  );
}

export default App;
