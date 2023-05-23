import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";

// This is secondary important

function App() {
  return (
    <>
    
      <Header />
      <Routes>

        <Route
          exact path="/" element={<> <Home /></>}
        />
        <Route path="/volunteer" element={<></>} />
        <Route path="/donation" element={<></>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
