import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"; 
import Anasayfa from "./pages/Anasayfa";
import Login from "./pages/Login";
import Hesabim from "./pages/Hesabim";

const styles = {
  nav: {
    backgroundColor: "#4CAF50",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  li: {
    margin: "0 15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  linkHover: {
    textDecoration: "underline",
  },
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={styles.nav}>
          <ul style={styles.ul}>
            <li style={styles.li}><Link style={styles.link} to="/">Anasayfa</Link></li>
            <li style={styles.li}><Link style={styles.link} to="/login">Login</Link></li>
            <li style={styles.li}><Link style={styles.link} to="/hesabim">Hesabım</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hesabim" element={<Hesabim />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
