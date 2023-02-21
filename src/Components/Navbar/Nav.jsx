import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="NavBarItems">
      <Link className="nav-link" to={"/articles"}>
        <h1 className="navbar-logo">
          Nc News
          <i className="fa-solid fa-newspaper"></i>
        </h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to={`/articles?topic=coding`}>
            Coding
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/articles?topic=football`}>
            Football
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/articles?topic=cooking`}>
            Cooking
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
