import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/games/:id" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
