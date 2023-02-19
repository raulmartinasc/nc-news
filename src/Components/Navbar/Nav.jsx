import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">
        Nc News
        <i className="fa-solid fa-newspaper"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-link" to={"/articles"}>
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/topics`}>
            {" "}
            Topics{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
