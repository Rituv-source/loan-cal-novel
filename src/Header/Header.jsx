import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [nightmode, setNightmode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (nightmode) {
      root.style.setProperty("--primary-color", "#4b4b4b");
      root.style.setProperty("--secondary-color", "black");
      root.style.setProperty("--third-color", "rgb(255, 255, 255)");
      root.style.setProperty("--reset-color", "#9c27b0");
    } else {
      root.style.setProperty("--primary-color", "#1976d2");
      root.style.setProperty("--secondary-color", "rgb(255, 255, 255)");
      root.style.setProperty("--third-color", "black");
      root.style.setProperty("--reset-color", "#9c27b0");
    }
  }, [nightmode]);

  return (
    <div className="container-fluid py-2 headercolor p-5 pt-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h5 className="mb-0 fs-4">Loan Calculator</h5>
        <nav className="d-flex align-items-center gap-5 flex-wrap">
          <Link to="/" className="text-decoration-none headercolor">HOME</Link>
          <Link to="/Exchangerate" className="text-decoration-none headercolor">EXCHANGE RATES(LIVE)</Link>
          <Link to="/About" className="text-decoration-none headercolor">ABOUT</Link>
          <Link to="/Errorpage" className="text-decoration-none headercolor">ERROR PAGE</Link>
          <label className="switch mb-0">
            <input
              type="checkbox"
              checked={nightmode}
              onChange={(e) => setNightmode(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </nav>
      </div>
    </div>
  );
}

export default Header;
