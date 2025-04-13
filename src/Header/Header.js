import logoimg from '../img/logo.jpeg';
import './Header.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchData from "../SearchData/SearchData";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const result = SearchData.find(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      if (result) {
        navigate(result.path);
      } else {
        alert("No match found.");
      }
    }
  };
  return (
    <header className="header sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logoimg} alt="Techno Mukriti" className="logo-img me-2" />
            <span className="fw-bold fs-5 text-primary">Mukt Techno Krit</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/product" className="nav-link">Product</Link>
              </li>
              <li className="nav-item">
                <Link to="/price" className="nav-link">Pricing</Link>
              </li>
            </ul>
            <span className="navbar-text ms-lg-3 mt-2 mt-lg-0">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Explore Services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
