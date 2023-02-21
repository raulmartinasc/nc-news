import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">
        Nc News
        <i className="fa-solid fa-newspaper"></i>
      </h1>
      <ul className="nav-menu">
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
